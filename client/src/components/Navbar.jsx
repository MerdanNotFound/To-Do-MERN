import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" className="nav-link" activeClassName="active-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/create"
            className="nav-link"
            activeClassName="active-link"
          >
            Create Task
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
