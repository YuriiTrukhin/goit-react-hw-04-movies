import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../routes";

const Navigation = () => {
  return (
    <nav>
      <NavLink exact to={routes.HomePage}>
        Home
      </NavLink>
      <NavLink exact to={routes.MoviesPage}>
        Movies
      </NavLink>
    </nav>
  );
};
export default Navigation;
