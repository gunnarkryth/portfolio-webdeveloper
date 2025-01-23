import { Outlet } from "react-router-dom";
import { Nav } from "../components/Nav";

export const MainLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};
