import React from "react";
import MenuItem from "../components/MenuItem";

function Menu() {
  return (
    <div>
      Menu
      {/* eventually we'll want to map to dynamically add items from database */}
      <MenuItem />
    </div>
  );
}

export default Menu;
