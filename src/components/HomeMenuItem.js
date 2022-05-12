import React from "react";
//import ReactDOM from "react-dom";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Search from "../components/Search";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function HomeMenuItem({
  menuItem,
  afterSelection,
  currSelection,
  setCurrSelection,
  inOrders,
  setInOrders,
}) {
  const { course, id, image_url, ingredients, name, price, restaurant_id } =
    menuItem;
  return (
    <div>
      <Grid container style={{ justifyContent: "space-evenly" }}>
        <Paper elevation={3}>
          <Grid item style={{ height: "300px", width: "200px" }}>
            <Grid container flexDirection="column">
              <Grid item style={{ height: "250px" }}>
                <img
                  style={{ height: "200px", width: "200px" }}
                  src={image_url}
                  alt="food_image_url"
                />
                <h5>{name}</h5>
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
      </Grid>
    </div>
  );
}

export default HomeMenuItem;
