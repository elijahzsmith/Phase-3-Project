import React from "react";
import MenuItem from "../components/MenuItem";

function Menu({ menuItems }) {
  const renderMenuItems = menuItems.map((menuItem) => {
    console.log(menuItem);
    return <MenuItem key={menuItem.id} menuItem={menuItem} />;
  });

  return (
    <div>
      <h1>Menu</h1>
      {renderMenuItems}
    </div>
  );
}

export default Menu;
