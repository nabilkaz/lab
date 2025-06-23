import React, { useState } from "react";
import {
  FilterButtonProps,
  GenericFilterProps,
  BlogPostFilterProps,
  FilterClearProps,
  FilterContainerProps,
} from "./Filter.types";
import { BlogPost } from "@/types";
import { getUniqueTags } from "@/data/blogPosts";

// Generic filter component that works with any list
export function GenericFilter<T>({
  items,
  getCategories,
  onFilterChange,
  getItemCategories,
}: GenericFilterProps<T>) {
  const availableCategories = getCategories(items);
  const [activeCategories, setActiveCategories] = useState<string[]>([]);
  const [isAllActive, setIsAllActive] = useState(true);

  const handleFilter = (category: string) => {
    if (category === "all") {
      // All button: activate all categories, deactivate individual ones
      setIsAllActive(true);
      setActiveCategories([]);
      onFilterChange(items);
    } else {
      // Regular category button: toggle this category, deactivate All
      setIsAllActive(false);
      const newActiveCategories = activeCategories.includes(category)
        ? activeCategories.filter((c) => c !== category)
        : [...activeCategories, category];

      setActiveCategories(newActiveCategories);

      const filteredItems = items.filter((item) => {
        const itemCategories = new Set(getItemCategories(item));
        return newActiveCategories.some((activeCat) =>
          itemCategories.has(activeCat)
        );
      });

      onFilterChange(filteredItems);
    }
  };

  const handleClear = () => {
    // Clear button: activate All, deactivate all individual categories
    setIsAllActive(true);
    setActiveCategories([]);
    onFilterChange(items);
  };

  return (
    <FilterContainer>
      <FilterButton category="all" onFilter={handleFilter} active={isAllActive}>
        All
      </FilterButton>
      {availableCategories.map((category) => (
        <FilterButton
          key={category}
          category={category}
          onFilter={handleFilter}
          active={!isAllActive && activeCategories.includes(category)}
        >
          {category}
        </FilterButton>
      ))}
      <FilterClear onClick={handleClear} />
    </FilterContainer>
  );
}

// Specific implementation for blog posts
export function BlogPostFilter({ posts, onFilterChange }: BlogPostFilterProps) {
  const getCategories = getUniqueTags;

  const getItemCategories = (post: BlogPost) => post.tags;

  return (
    <GenericFilter
      items={posts}
      getCategories={getCategories}
      onFilterChange={onFilterChange}
      getItemCategories={getItemCategories}
    />
  );
}

export default function FilterContainer({ children }: FilterContainerProps) {
  return <div className="flex flex-row gap-4">{children}</div>;
}

export function FilterButton({
  active,
  category,
  children,
  onFilter,
}: FilterButtonProps) {
  return (
    <button
      className={`text-sm font-medium px-4 py-2 rounded-md transition-colors ${
        active ? "bg-gray-100" : "hover:bg-gray-100"
      }`}
      onClick={() => {
        onFilter(category);
      }}
    >
      {/* TODO: Add a filter icon to the filter button */}
      {children}
    </button>
  );
}

export function FilterClear({ onClick }: FilterClearProps) {
  return (
    <button
      className="text-sm font-medium px-4 py-2 rounded-md transition-colors"
      onClick={onClick}
    >
      {/* TODO: Add a clear icon to the filter clear button */}
      Clear
    </button>
  );
}
