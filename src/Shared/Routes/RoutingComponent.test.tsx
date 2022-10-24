import { MemoryRouter } from "react-router-dom";

import { render, screen } from "@testing-library/react";

import RoutingComponent from "./RoutingComponent";

describe.only("Routing Component", () => {
  it("Should route to not found page on bad routes", () => {
    const badRoute = "/some/bad/route";

    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <RoutingComponent />
      </MemoryRouter>
    );

    expect(screen.getByText(/not found/i)).toBeInTheDocument();
  });
  it("Should route to home on /", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <RoutingComponent />
      </MemoryRouter>
    );
    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });
});
