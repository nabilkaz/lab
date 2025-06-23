import React, { ComponentProps } from "react";

type NavigationItemProps = ComponentProps<"a"> & {
  active?: boolean;
  children: React.ReactNode;
};

function NavBar({ children, ...delegate }: ComponentProps<"nav">) {
  return (
    <nav className="w-full max-w-[680px] px-4 sm:px-0" {...delegate}>
      {children}
    </nav>
  );
}

export function NavigationList({
  children,
}: ComponentProps<typeof NavigationItem>) {
  return (
    <ul className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full">
      {children}
    </ul>
  );
}

export function NavigationItem({
  active = false,
  children,
}: NavigationItemProps) {
  return (
    <li
      className={`text-sm font-medium px-4 py-2 rounded-md transition-colors w-full sm:w-auto text-center sm:text-left ${
        active ? "bg-gray-100" : "hover:bg-gray-100"
      }`}
    >
      <a>{children}</a>
    </li>
  );
}

export default NavBar;
