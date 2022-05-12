import React from "react";

function MenuItem({ menuItem, inOrders, setInOrders }) {
  const { id, course, name, image_url, ingredients, price } = menuItem;

  const tax = 0.3;

  const newOrderItem = {
    name,
    price,
  };

  const configObjPOST = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(newOrderItem),
  };

  const handleClick = (menuItem) => {
    console.log("Added to Orders!", menuItem);
    fetch(`http://localhost:9292/orders`, configObjPOST)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setInOrders([...inOrders, data]);
      });
  };
  return (
    <div>
      <div className="menu-item-card">      
        <div className="title-photo">
          <img src={image_url} alt="food-pic" className="food-pic"></img>
          <h1>{name}</h1>
        </div>
        <h2>{course}</h2>
        <h2>{ingredients}</h2>
        <h2>Price: ${price}</h2>
        <button onClick={() => handleClick(menuItem)}>Add to order</button>
      </div>
    </div>
  );
}

export default MenuItem;
