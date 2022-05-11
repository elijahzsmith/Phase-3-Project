import React from "react";

function Orders() {
  return (
    <div>
      <h1>Orders Page</h1>
      <div className="order-container">
        <div className="order-items">
          <h3>Insert OrderItems in this div</h3>
        </div>
        <div className="checkout-container">
          <div className="price-details">
            {/* Make dynamic */}
            <h3>Insert price and details here</h3>
            <h6>itemized prices: $</h6>
            <h6>tax: $</h6>
            <h6>total: $</h6>
          </div>
          {/* (mock the checkout experience or do away with this feature) */}
          <button>checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Orders;
