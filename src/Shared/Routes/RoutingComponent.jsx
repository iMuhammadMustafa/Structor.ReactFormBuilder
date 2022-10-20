import { useRoutes } from "react-router-dom";

import * as RoutingService from "./Routing.Service";

export default function RoutingComponent() {
  const routes = RoutingService.getRoutes();
  return useRoutes([...routes]);
}

export function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Home</p>
      </header>
    </div>
  );
}

export function NotFound() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Not Found</p>
      </header>
    </div>
  );
}
