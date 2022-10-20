import routes from "./Routes.Config";
import { NAVBAR, NAVBAR_END, NAVBAR_START, SIDEBAR } from "./Routes.Types";
import { NotFound } from "./RoutingComponent";

export const getRoutes = () => {
  const notFoundRoute = { path: "*", element: <NotFound /> };
  const returnedRoutes = routes
    .filter(route => route.isActive)
    .map(route => {
      if (route.component) {
        return { path: route.path, element: route.component };
      }
      return { path: route.path, element: <NotFound /> };
    });

  return [...returnedRoutes, notFoundRoute];
};

export const getNavBarStartRoutes = () => {
  return routes
    .filter(route => route.isActive && route?.dist?.find(dist => dist.name === NAVBAR && dist.align === NAVBAR_START))
    .sort((a, b) => {
      if (a.order && b.order && a.order > b.order) return 1; // if return < 0 => a.b  ---  return > 0 => b.a
      else return -1;
    });
};

export const getNavBarEndRoutes = () => {
  return routes
    .filter(route => route.isActive && route?.dist?.some(dist => dist.name === NAVBAR && dist.align === NAVBAR_END))
    .sort((a, b) => {
      if (a.order && b.order && a.order > b.order) return 1; // if return < 0 => a.b  ---  return > 0 => b.a
      else return -1;
    });
};

export const getSideBarRoutes = () => {
  return routes
    .filter(route => route.isActive && route?.dist?.some(dist => dist.name === SIDEBAR))
    .sort((a, b) => {
      if (a.order && b.order && a.order > b.order) return 1; // if return < 0 => a.b  ---  return > 0 => b.a
      else return -1;
    });
};

// export const sort = (a, b, property) => {
//   if (a[property] > b[property]) return 1; // if a then b  return < 0  if b then a  return > 0
//   else return -1;
// };
