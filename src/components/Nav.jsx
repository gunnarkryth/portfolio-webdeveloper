import { NavLink } from "react-router-dom";
import { NavLinks } from "../utils/NavLinks";

export const Nav = () => {
  return (
    <nav>
      <ul>
        {NavLinks.map((link) => (
          <li key={link.path}>
            <NavLink to={link.path ? link.path : "/" + link.name}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
