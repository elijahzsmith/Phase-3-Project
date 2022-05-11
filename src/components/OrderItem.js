import React from "react";

function OrderItem({ order }) {
  const { name, price } = order;

  return (
    <div>
      OrderItem
      <div className="order-container">
        <div className="order-items">
          <h3>{name}</h3>
        </div>
        <div className="checkout-container">
          <div className="price-details">
            {/* Make dynamic */}
            <h4>Price: ${price}</h4>
            {/* <h6>tax: $</h6>
            <h6>total: $</h6> */}
          </div>
          {/* (mock the checkout experience or do away with this feature) */}
          <button>checkout</button>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
