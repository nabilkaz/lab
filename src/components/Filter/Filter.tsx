import React, { useState } from "react";
import {
  FilterButtonProps,
  GenericFilterProps,
  BlogPostFilterProps,
  FilterClearProps,
  FilterContainerProps,
} from "./Filter.types";
import { BlogPost } from "@/types";
import { capitalizeFirst } from "@/lib/utils";

// Generic filter component that works with any list
export function GenericFilter<T>({
  items,
  getCategories,
  onFilterChange,
  getItemCategories,
}: GenericFilterProps<T>) {
  const availableCategories = getCategories(items).sort();
  const [activeCategories, setActiveCategories] = useState<string[]>([]);
  const [isAllActive, setIsAllActive] = useState(true);

  const handleFilter = (category: string): void => {
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

  const handleClear = (): void => {
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
          {capitalizeFirst(category)}
        </FilterButton>
      ))}
      <FilterClear onClick={handleClear} />
    </FilterContainer>
  );
}

// Specific implementation for blog posts
export function BlogPostFilter({ posts, onFilterChange }: BlogPostFilterProps) {
  const getCategories = () => {
    const uniqueCategories = new Set(posts.map((post) => post.category));
    return Array.from(uniqueCategories);
  };

  const getItemCategories = (post: BlogPost) => [post.category];

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
  return <div className="flex flex-row gap-4 items-end">{children}</div>;
}

export function FilterButton({
  active,
  category,
  children,
  onFilter,
}: FilterButtonProps) {
  return (
    <button
      className={`text-sm font-medium pb-1 border-b-2 transition-all text-left ${
        active
          ? "border-gray-950 text-gray-950"
          : "border-transparent text-gray-700 hover:border-gray-400 hover:text-gray-950"
      }`}
      onClick={(): void => {
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
      className="text-sm font-normal pb-1 border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 transition-all text-left"
      onClick={(): void => {
        onClick();
      }}
    >
      {/* TODO: Add a clear icon to the filter clear button */}
      Clear
    </button>
  );
}
