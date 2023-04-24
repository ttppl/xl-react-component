import { lazy } from "react";

export default [
  {
    path: "/collapse",
    name: "折叠面板",
    component: lazy(() => import("@/pages/CollapseExample"))
  }
];
