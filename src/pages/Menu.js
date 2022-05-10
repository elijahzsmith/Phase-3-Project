import React from "react";
import MenuItem from "../components/MenuItem";

function Menu() {
  return (
    <div>
      <h1>Menu</h1>
      {/* eventually we'll want to map to dynamically add items from database */}
      <MenuItem />
    </div>
  );
}

export default Menu;
