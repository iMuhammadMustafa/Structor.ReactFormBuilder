import { ReactElement } from "react";

export const NAVBAR = "NAVBAR";
export const SIDEBAR = "SIDEEBAR";
export const NAVBAR_START = "start";
export const NAVBAR_END = "end";

export interface RouteElement {
  name: string;
  path: string;
  component: ReactElement;
  isActive: boolean;
  parent?: string;
  order?: number;
  dist?: Array<{ name: string; align?: string }>;
  requireAuthentication?: boolean;
}

// interface RouteDist {
//   name: string;
//   align?: string;
// }
