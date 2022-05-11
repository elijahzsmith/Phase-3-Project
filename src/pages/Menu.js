import React from "react";
import MenuItem from "../components/MenuItem";
import Search from "../components/Search";

function Menu({
  menuItems,
  afterSearch,
  currSearch,
  setCurrSearch,
  afterSelection,
  currSelection,
  setCurrSelection,
}) {
  const renderMenuItems = afterSearch.map((menuItem) => {
    // this way let's you filter with drop down but cant do both at once
    // const renderMenuItems = afterSelection.map((menuItem) => {
    console.log(menuItem);
    return (
      <MenuItem
        key={menuItem.id}
        menuItem={menuItem}
        afterSelection={afterSelection}
        currSelection={currSelection}
        setCurrSelection={setCurrSelection}
      />
    );
  });

  return (
    <div>
      <h1>Menu</h1>
      <Search
        currSearch={currSearch}
        setCurrSearch={setCurrSearch}
        afterSelection={afterSelection}
        currSelection={currSelection}
        setCurrSelection={setCurrSelection}
      />
      <select
        className="food-filter"
        onChange={(e) => setCurrSelection(e.target.value)}
      >
        {/* Not cuisine but I cant think of the word */}
        <option value="choose">Choose your cuisine</option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="appetizer">Appetizer</option>
        <option value="desert">Dessert</option>
        <option value="drinks">Drinks</option>
      </select>
      {renderMenuItems}
    </div>
  );
}

export default Menu;
