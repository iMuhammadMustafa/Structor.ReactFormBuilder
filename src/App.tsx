import { BrowserRouter } from "react-router-dom";

import RoutingComponent from "@/Shared/Routes/RoutingComponent";
import NavBar from "@Shared/Components/Layout/Navbar/NavBar";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <RoutingComponent />
    </BrowserRouter>
  );
}

export default App;
