import { NavLink } from "react-router-dom";
import { NavLinks } from "../utils/NavLinks";
import s from "./Nav.module.scss";

export const Nav = () => {
  return (
    <nav className={s.nav}>
      <ul>
        {NavLinks.map((link, index) => (
          <li key={index}>
            <NavLink to={link.path ? link.path : "/" + link.name}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
