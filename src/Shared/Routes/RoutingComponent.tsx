import { useRoutes } from "react-router-dom";

import { getRoutes } from "./Routing.Service";

export default function RoutingComponent() {
  const routes = getRoutes();
  return useRoutes([...routes]);
}
