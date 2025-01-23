import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import { NavLinks } from "../utils/NavLinks";

export const LocalRouter = () => {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {NavLinks.map((link, index) => (
          <Route
            path={link.path}
            element={link.element}
            index={link.isIndex}
            key={index}
          />
        ))}
      </Route>
    </Routes>
  </BrowserRouter>;
};
