import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav-bar">
      <NavLink exact to="/">
        <span className="logo-container">
          <img
            src="https://pbs.twimg.com/profile_images/80388980/logo_400x400.png"
            alt="logo"
            className="logo"
          ></img>
          <h1>Sinatra's Finest!</h1>
        </span>
      </NavLink>
      <ul className="nav-links">
        <NavLink exact to="/menu">
          <li>Menu</li>
        </NavLink>
        <NavLink exact to="/orders">
          <li>Orders</li>
        </NavLink>
        <NavLink exact to="/about">
          <li>About</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default NavBar;
