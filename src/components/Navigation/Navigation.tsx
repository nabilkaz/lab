import React, { ComponentProps } from "react";
import { NavigationLinkProps } from "./Navigation.types";

function NavBar({ children, ...delegate }: ComponentProps<"nav">) {
  return <nav {...delegate}>{children}</nav>;
}

export function NavigationMenulist({
  children,
}: ComponentProps<typeof NavigationMenuLink>) {
  return <ul className="flex flex-row gap-4">{children}</ul>;
}

export function NavigationMenuLink({
  active = false,
  children,
}: NavigationLinkProps) {
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

export default NavBar;
