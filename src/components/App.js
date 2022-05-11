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
  const [reviews, setReviews] = useState([]);
  const [currSearch, setCurrSearch] = useState("");
  const [currSelection, setCurrSelection] = useState("Choose your cuisine");
  const [inOrders, setInOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/reviews")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
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
    fetch("http://localhost:9292/orders")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setInOrders(data);
      });
  }, []);

  const afterSearch = menuItems.filter((item) => {
    if (currSearch === "") {
      return item;
    } else if (item.name.toLowerCase().includes(currSearch.toLowerCase())) {
      return item;
    } else {
      return null;
    }
  });

  const afterSelection = afterSearch.filter((item) => {
    if (currSelection === "Choose your cuisine") {
      return item;
    } else if (
      item.course.toLowerCase().includes(currSelection.toLowerCase())
    ) {
      return item;
    } else {
      return null;
    }
  });

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/orders">
          <Orders inOrders={inOrders} setInOrders={setInOrders} />
        </Route>
        <Route exact path="/menu">
          <Menu
            menuItems={menuItems}
            afterSearch={afterSearch}
            currSearch={currSearch}
            setCurrSearch={setCurrSearch}
            afterSelection={afterSelection}
            currSelection={currSelection}
            setCurrSelection={setCurrSelection}
            inOrders={inOrders}
            setInOrders={setInOrders}
          />
        </Route>
        <Route exact path="/about">
          <About reviews={reviews} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
