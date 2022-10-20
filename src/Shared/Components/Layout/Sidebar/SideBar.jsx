import { NavLink } from "react-router-dom";

import * as RoutingService from "@/Shared/Routes/Routing.Service";

const appName = import.meta.env.VITE_APP_NAME;
function SideBar() {
  return (
    <>
      <div
        className="offcanvas offcanvas-start bg-dark text-light"
        tabIndex={-1}
        id="sideBarOffcanvas"
        aria-labelledby="sideBarOffcanvasLabel"
      >
        <CanvasHeader />
        <CanvasBody />
      </div>
    </>
  );
}

function CanvasBody() {
  return (
    <div className="offcanvas-body navbar-dark">
      <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
        {RoutingService.getSideBarRoutes().map((route, index) => {
          return (
            <li key={index} className="nav-item">
              <NavLink className="nav-link" to={route.path}>
                {route.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function CanvasHeader() {
  return (
    <div className="offcanvas-header bg-dark border-bottom border-secondary">
      <h5 className="offcanvas-title" id="sideBarOffcanvasLabel">
        {appName}
      </h5>
      <button
        type="button"
        className="btn-close btn-close-white"
        data-bs-dismiss="offcanvas"
        data-bs-target="#offcanvas"
        aria-label="Close"
      ></button>
    </div>
  );
}

export function SideBarToggler() {
  return (
    <button
      className="btn navbar-brand mx-0"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#sideBarOffcanvas"
      aria-controls="offcanvas"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
  );
}

export default SideBar;
