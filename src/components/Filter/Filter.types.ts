import { ComponentProps } from "react";
import { BlogPost } from "@/types";

export interface FilterButtonProps extends ComponentProps<"button"> {
  active: boolean;
  category: string;
  onFilter: (category: string) => void;
}

export interface GenericFilterProps<T> {
  items: T[];
  getCategories: (items: T[]) => string[];
  onFilterChange: (filteredItems: T[]) => void;
  getItemCategories: (item: T) => string[];
}

export interface BlogPostFilterProps {
  posts: BlogPost[];
  onFilterChange: (filteredPosts: BlogPost[]) => void;
}

export interface FilterClearProps {
  onClick: () => void;
}

export interface FilterContainerProps {
  children: React.ReactNode;
}
