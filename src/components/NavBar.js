import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="nav-bar">
        <NavLink exact to="/">
          <span className="logo-container">
            <img
              src="https://render.fineartamerica.com/images/rendered/medium/framed-print/images/artworkimages/medium/2/frank-sinatra-pop-art-stars-on-art.jpg?imgWI=27&imgHI=36&sku=CRQ13&mat1=PM918&mat2=&t=2&b=2&l=2&r=2&off=0.5&frameW=0.875"
              alt="logo"
              className="logo"
            ></img>
          </span>
        </NavLink>
        <div className="homeRestaurantName">SINATRA'S</div>
        <ul className="nav-links">
          <ul className="nav-links">
            {/* <NavLink exact to="/">
              <li className="nav-name">HOME</li>
            </NavLink> */}
            <NavLink exact to="/menu">
              <li className="nav-name">MENU</li>
            </NavLink>
            <NavLink exact to="/orders">
              <li className="nav-name">ORDERS</li>
            </NavLink>
            <NavLink exact to="/about">
              <li className="nav-name">ABOUT</li>
            </NavLink>
          </ul>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
