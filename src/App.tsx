import { BrowserRouter } from "react-router-dom";

import RoutingComponent from "@/Shared/Routes/RoutingComponent";
import NavBar from "@Shared/Components/Layout/Navbar/NavBar";

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
