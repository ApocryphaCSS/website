import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function Root() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Outlet />
    </>
  );
}

export default Root;
