import React from "react";
//import ReactDOM from "react-dom";
import Grid from "@mui/material/Grid";
import Search from "../components/Search";

function Home({ renderHomeMenuItems }) {
  return (
    <div>
      <Search />
      <h1>Specials</h1>
      <Grid container style={{ justifyContent: "space-evenly" }}>
        {renderHomeMenuItems}
      </Grid>
    </div>
  );
}

export default Home;

{
  /* <Paper elevation={3}>
          <Grid item style={{ height: "300px", width: "200px" }}>
            <Grid container flexDirection="column">
              <Grid item style={{ height: "250px" }}>
                <img src="#" alt="food image_url" />
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
        <Paper elevation={3}>
          <Grid item style={{ height: "300px", width: "200px" }}>
            <Grid container flexDirection="column">
              <Grid item style={{ height: "250px" }}>
                <img src="#" alt="food image_url" />
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
        <Paper elevation={3}>
          <Grid item style={{ height: "300px", width: "200px" }}>
            <Grid container flexDirection="column">
              <Grid item style={{ height: "250px" }}>
                <img src="#" alt="food image_url" />
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
        <Paper elevation={3}>
          <Grid item style={{ height: "300px", width: "200px" }}>
            <Grid container flexDirection="column">
              <Grid item style={{ height: "250px" }}>
                <img src="#" alt="food image_url" />
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
        <Paper elevation={3}>
          <Grid item style={{ height: "300px", width: "200px" }}>
            <Grid container flexDirection="column">
              <Grid item style={{ height: "250px" }}>
                <img src="#" alt="food image_url" />
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
        </Paper> */
}
