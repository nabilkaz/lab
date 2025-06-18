import React, { ComponentProps } from "react";
import { NavigationItemProps } from "./Navigation.types";

function NavBar({ children, ...delegate }: ComponentProps<"nav">) {
  return <nav {...delegate}>{children}</nav>;
}

export function NavigationList({
  children,
}: ComponentProps<typeof NavigationItem>) {
  return <ul className="flex flex-row gap-4">{children}</ul>;
}

export function NavigationItem({
  active = false,
  children,
}: NavigationItemProps) {
  return (
    <li
      className={`text-sm font-medium px-4 py-2 rounded-md transition-colors ${
        active ? "bg-gray-100" : "hover:bg-gray-100"
      }`}
    >
      <a>{children}</a>
    </li>
  );
}

// TODO: Navigation renders semantic HTML (nav > ul > li structure)
// TODO: Supports both internal links (href) and actions (onClick) via polymorphism
// TODO: Accepts full ComponentProps delegation for styling/behavior
// TODO: Includes proper ARIA attributes for accessibility
// TODO: Responsive design with mobile variant
// TODO: Integration with your existing Motion.dev setup

export default NavBar;
