import React from "react";
import OrderItem from "../components/OrderItem";
import Button from "@mui/material/Button";
import Search from "../components/Search";


function Orders({
  inOrders,
  setInOrders,
  renderMenuItemsOrderPage,
  currSelection,
  setCurrSelection,
  currSearch,
  setCurrSearch,
}) {

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
          <div className="restaurantInfo">Sinatra's Finest</div>
          <div className="menuOrderItems">
            <Search currSearch={currSearch} setCurrSearch={setCurrSearch} />
            <select
              className="food-filter"
              onChange={(e) => setCurrSelection(e.target.value)}
            >
              {/* Not cuisine but I cant think of the word */}
              <option value="choose">Choose your cuisine</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="appetizer">Appetizer</option>
              <option value="dessert">Dessert</option>
              <option value="drinks">Drinks</option>
            </select>
            {renderMenuItemsOrderPage}
          </div>
        </div>
        <div className="orderRight">
          Your Order
          <div className="menuOrderItems">{renderOrderItems}</div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
