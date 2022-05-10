import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "../pages/Home";
import NavBar from "./NavBar";
import About from "../pages/About";
import Orders from "../pages/Orders";
import Menu from "../pages/Menu";
import Footer from "./Footer";

function App() {
  // this fetch is to the base url and currently does nothing
  // ( returns => f json() { [native code] } currently instead of hello world message )
  useEffect(() => {
    fetch("http://localhost:9292")
      .then((res) => res.json)
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/orders">
          <Orders />
        </Route>
        <Route exact path="/menu">
          <Menu />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
