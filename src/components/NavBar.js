import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <NavLink exact to="/">
        <img src="#" alt="logo" className="logo"></img>
      </NavLink>
      <ul>
        <NavLink exact to="/orders">
          <li>Orders</li>
        </NavLink>
        <NavLink exact to="/menu">
          <li>Menu</li>
        </NavLink>
        <NavLink exact to="/about">
          <li>About</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default NavBar;
