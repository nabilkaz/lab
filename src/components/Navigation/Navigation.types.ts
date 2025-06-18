import { ComponentProps } from "react";

export type NavigationLinkProps = ComponentProps<"a"> & {
  active?: boolean;
  children: React.ReactNode;
};
