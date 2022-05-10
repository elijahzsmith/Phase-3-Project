import React from "react";

function MenuItem({ menuItem }) {
  const { id, course, name, ingredients, price } = menuItem;
  return (
    <div>
      <div className="menu-item-card">
        MenuItem
        <h1>{name}</h1>
        <h2>{course}</h2>
        <h2>{ingredients}</h2>
        <h2>Price: ${price}</h2>
        <button>Add to order</button>
      </div>
    </div>
  );
}

export default MenuItem;
