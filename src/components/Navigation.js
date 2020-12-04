import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../routes";

const Navigation = () => {
  return (
    <nav className="nav">
      <NavLink exact to={routes.HomePage} activeClassName="link-is-active">
        Home
      </NavLink>
      <NavLink exact to={routes.MoviesPage} activeClassName="link-is-active">
        Movies
      </NavLink>
    </nav>
  );
};
export default Navigation;
