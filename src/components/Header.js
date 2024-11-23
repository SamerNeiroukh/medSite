import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <header>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}
              exact
            >
              דף הבית
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}
            >
              אודותינו
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/courses"
              className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}
            >
              קורסים
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/registration"
              className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}
            >
              הרשמה
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}
            >
              צור קשר
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
