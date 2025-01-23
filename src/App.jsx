import "./App.scss";
import { LocalRouter } from "./components/LocalRouter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import { NavLinks } from "./utils/NavLinks";
// import { Home, Contact } from "../pages/Index";

function App() {
  return (
    <>
      {/* <LocalRouter /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            {NavLinks.map((link, index) => (
              <Route
                path={link.path}
                element={link.element}
                index={link.isIndex}
              />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
