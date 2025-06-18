import { ComponentProps } from "react";

export type NavigationItemProps = ComponentProps<"a"> & {
  active?: boolean;
  children: React.ReactNode;
};
