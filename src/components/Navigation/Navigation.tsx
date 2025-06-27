import React, { ComponentProps } from "react";

type NavigationItemProps = ComponentProps<"a"> & {
  active?: boolean;
  children: React.ReactNode;
};

function NavBar({ children, ...delegate }: ComponentProps<"nav">) {
  return (
    <nav className="w-full max-w-[680px]" {...delegate}>
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
      className={`text-sm font-medium pb-1 border-b-2 transition-all w-full sm:w-auto text-center sm:text-left ${
        active
          ? "border-gray-950 text-gray-950"
          : "border-transparent text-gray-700 hover:border-gray-400 hover:text-gray-950"
      }`}
    >
      <a>{children}</a>
    </li>
  );
}

export default NavBar;
