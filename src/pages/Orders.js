import React from "react";
import OrderItem from "../components/OrderItem";
import Button from "@mui/material/Button";

function Orders({ inOrders, setInOrders, renderMenuItemsOrderPage }) {
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
            {renderMenuItemsOrderPage}
          </div>
        </div>
        <div className="orderRight">
          Your Order
          <div className="menuOrderItems">
            this is where order items go
            {renderOrderItems}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
