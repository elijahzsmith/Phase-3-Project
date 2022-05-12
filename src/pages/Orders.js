import React from "react";
import OrderItem from "../components/OrderItem";
import Button from "@mui/material/Button";

function Orders({ inOrders, setInOrders, renderMenuItems }) {
  // console.log(renderMenuItems);
  const renderOrderItems = inOrders.map((order) => {
    console.log(order);
    return (
      <OrderItem
        key={order.id}
        order={order}
        inOrders={inOrders}
        setInOrders={setInOrders}
      />
    );
  });

  return (
    <div>
      <div className="order">
        <div className="orderLeft">
          <div className="restaurantInfo">Sinatra's</div>
          <div className="menuOrderItems">
            this is where menu items go
            {renderMenuItems}
          </div>
        </div>
        <div className="orderRight">
          Your Order
          <div className="menuOrderItems">
            this is where order items go
            {renderOrderItems}
          </div>
        </div>
        {/* <h1>Orders Page</h1> */}
        {/* {renderOrderItems} */}
        {/* <h6>tax: $</h6> */}
        {/* <h6>total: $</h6> */}
        {/* <Button variant="contained" size="small"> */}
        {/* Checkout */}
        {/* </Button> */}
      </div>
    </div>
  );
}

export default Orders;
