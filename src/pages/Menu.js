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
      <select className="food-filter">
        {/* Not cuisine but I cant think of the word */}
        <option value="choose">Choose your cuisine</option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="appetizer">Appetizer</option>
        <option value="drinks">Drinks</option>
      </select>
      {renderMenuItems}
    </div>
  );
}

export default Menu;
