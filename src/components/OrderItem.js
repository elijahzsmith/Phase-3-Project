import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

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
          <Box display="flex" justifyContent="center">
            <Button
              variant="contained"
              size="small"
              onClick={(e) => console.log(e.target.value)}
            >
              Remove
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
