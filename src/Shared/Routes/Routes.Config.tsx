import { Home } from "./NotFound";
import { RouteElement } from "./Routes.Types";
import { NAVBAR, NAVBAR_START, SIDEBAR } from "./Routes.Types";

const routes: Array<RouteElement> = [
  {
    name: "Home",
    path: "/",
    component: <Home />,
    order: 100,
    dist: [{ name: NAVBAR, align: NAVBAR_START }, { name: SIDEBAR }],
    requireAuthentication: false,
    isActive: true,
  },
];

export default routes;
/*
  //   {
  //     name: "NewPage",
  //     path: "/NewPage",
  //     element: <NewPage />,
  //     order: 200,
  //     align: "start",
  //     dist: [NAVBAR, SIDEBAR],
  //     isActive: true,
  //   },

  // {
  //   name: "Account Setup",
  //   path: "/Accounts",
  //   requireAuthentication: true,
  //   element: <Accounts />,
  //   order: 200,
  //   align: "start",
  //   dist: [SIDEEBAR],
  //   isActive: true,
  // },
  // {
  //   name: "Categories",
  //   path: "/Categories",
  //   requireAuthentication: true,
  //   element: <Categories />,
  //   order: 200,
  //   align: "start",
  //   dist: [SIDEEBAR],
  //   isActive: true,
  // },
  */
