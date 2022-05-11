import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
//import Search from "../components/Search";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

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
        MenuItem
        <div className="title-photo">
          <img src={image_url} alt="food-pic" className="food-pic"></img>
          <h1>{name}</h1>
        </div>
        <h2>{course}</h2>
        <h2>{ingredients}</h2>
        <h2>Price: ${price}</h2>
        <Box display="flex" justifyContent="center">
          <Button
            variant="contained"
            size="small"
            onClick={() => handleClick(menuItem)}
          >
            Add to Order
          </Button>
        </Box>
      </div>
    </div>
    /* <Grid
      container
      style={{ flexFlow: "row-wrap", justifyContent: "space-around" }}
    >
      <Paper elevation={3}>
        <Grid item style={{ height: "300px", width: "200px" }}>
          <Grid container flexDirection="column">
            <Grid item style={{ height: "250px" }}>
              <img src={image_url} alt="food-pic" className="food-pic"></img>
              <h1>{name}</h1>
            </Grid>
            <Grid
              item
              justifyContent="center"
              style={{ justifyContent: "center" }}
            >
              <Box display="flex" justifyContent="center">
                <Button variant="contained" size="small">
                  Order
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid> */
    //   <div className="menu-item-card">
    //     MenuItem
    //     <div className="title-photo">
    //       <img src={image_url} alt="food-pic" className="food-pic"></img>
    //       <h1>{name}</h1>
    //     </div>
    //     <h2>{course}</h2>
    //     <h2>{ingredients}</h2>
    //     <h2>Price: ${price}</h2>
    //     <button onClick={() => handleClick(menuItem)}>Add to order</button>
    //   </div>
    // </div>
  );
}

export default MenuItem;
