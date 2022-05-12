import React from "react";
import OrderItem from "../components/OrderItem";
import Button from "@mui/material/Button";

function Orders({ inOrders, setInOrders }) {
  const renderOrderItems = inOrders.map((order) => {
    console.log(order);
    return (
      <OrderItem order={order} inOrders={inOrders} setInOrders={setInOrders} />
    );
  });

  return (
    <div>
      <h1>Orders Page</h1>
      {renderOrderItems}
      <h6>tax: $</h6>
      <h6>total: $</h6>
      <Button variant="contained" size="small">
        Checkout
      </Button>
    </div>
  );
}

export default Orders;
