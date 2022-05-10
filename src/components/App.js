import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "../pages/Home";
import NavBar from "./NavBar";
import About from "../pages/About";
import Orders from "../pages/Orders";
import Menu from "../pages/Menu";
import Footer from "./Footer";

function App() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/reviews")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    fetch("http://localhost:9292/menu_items")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMenuItems(data);
      });
    fetch("http://localhost:9292/customers")
      .then((res) => res.json())
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
          <Menu menuItems={menuItems} />
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
