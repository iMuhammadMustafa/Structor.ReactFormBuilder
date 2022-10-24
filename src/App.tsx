import { BrowserRouter } from "react-router-dom";

import NavBar from "@Shared/Components/Layout/Navbar/NavBar";
import RoutingComponent from "@Shared/Routes/RoutingComponent";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <RoutingComponent />
      </BrowserRouter>
    </>
  );
}
