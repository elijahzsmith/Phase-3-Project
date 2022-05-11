import React from "react";

function MenuItem({ menuItem }) {
  const { id, course, name, image_url, ingredients, price } = menuItem;

  const tax = 0.3;

  const newOrderItem = {
    price,
  };

  const configObjPOST = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(),
  };

  const handleClick = (e) => {
    console.log(e.target);
    fetch(`http://localhost:9292/${e.target.id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <div className="menu-item-card">
        MenuItem
        <div className="title-photo">
          <img src={image_url} alt="food-pic" className="food-pic"></img>
          <h1>{name}</h1>
        </div>
        <h2>{course}</h2>
        <h2>{ingredients}</h2>
        <h2>Price: ${price}</h2>
        <button onClick={(e) => handleClick(e)}>Add to order</button>
      </div>
    </div>
  );
}

export default MenuItem;
