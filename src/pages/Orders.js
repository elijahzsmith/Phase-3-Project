import React from "react";
import OrderItem from "../components/OrderItem";

function Orders({ inOrders, setInOrders }) {
  const renderOrderItems = inOrders.map((order) => {
    console.log(order);
    return <OrderItem order={order} />;
  });
  return (
    <div>
      <h1>Orders Page</h1>
      {renderOrderItems}
      <h6>tax: $</h6>
      <h6>total: $</h6>
      {/* <div className="order-container">
        <div className="order-items">
          <h3>Insert OrderItems in this div</h3>
        </div>
        <div className="checkout-container">
          <div className="price-details">
            <h3>Insert price and details here</h3>
            <h6>itemized prices: $</h6>
            <h6>tax: $</h6>
            <h6>total: $</h6>
          </div>

          <button>checkout</button>
        </div>
      </div> */}
    </div>
  );
}

export default Orders;
