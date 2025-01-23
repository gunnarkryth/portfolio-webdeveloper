import { Home, Contact } from "../pages/Index";

export const NavLinks = [
  { name: "home", path: "/", element: <Home />, isIndex: true },
  { name: "contact", path: "/contact", element: <Contact /> },
  { name: "projects" },
];
