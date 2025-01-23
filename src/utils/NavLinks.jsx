import { Home, Contact } from "../pages/Index";
// import { Home } from "../pages/Home";
// import { Contact } from "../pages/Contact";

export const NavLinks = [
  { name: "home", path: "/", element: <Home/>, isIndex: true },
  { name: "contact", path: "/contact", element: <Contact/> },
  { name: "projects" },
];
