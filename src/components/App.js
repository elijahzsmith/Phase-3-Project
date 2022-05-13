import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "../pages/Home";
import NavBar from "./NavBar";
import About from "../pages/About";
import Orders from "../pages/Orders";
import Menu from "../pages/Menu";
import MenuItem from "./MenuItem";
import HomeMenuItem from "./HomeMenuItem";
// import Footer from "./Footer";

function App() {
  const [menuItems, setMenuItems] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [currSearch, setCurrSearch] = useState("");
  const [currSelection, setCurrSelection] = useState("Choose your cuisine");
  const [inOrders, setInOrders] = useState([]);
  const [menuItemsInOrder, setMenuItemsInOrder] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });

    fetch("http://localhost:9292/menu_items")
      .then((res) => res.json())
      .then((data) => {
        setMenuItems(data);
        setMenuItemsInOrder(data);
      });

    fetch("http://localhost:9292/customers")
      .then((res) => res.json())
      .then((data) => {
        console.log("customers", data);
      });

    fetch("http://localhost:9292/orders")
      .then((res) => res.json())
      .then((data) => {
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
  const afterSearch2 = menuItemsInOrder.filter((item) => {
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
  const afterSelection2 = afterSearch2.filter((item) => {
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

  const renderMenuItems = afterSelection.map((menuItem) => {
    return (
      <MenuItem
        key={menuItem.id}
        menuItem={menuItem}
        afterSelection={afterSelection}
        currSelection={currSelection}
        setCurrSelection={setCurrSelection}
        inOrders={inOrders}
        setInOrders={setInOrders}
      />
    );
  });
  const renderMenuItemsOrderPage = afterSelection2.map((menuItem) => {
    return (
      <MenuItem
        key={menuItem.id}
        menuItem={menuItem}
        afterSelection={afterSelection}
        currSelection={currSelection}
        setCurrSelection={setCurrSelection}
        inOrders={inOrders}
        setInOrders={setInOrders}
      />
    );
  });
  const renderHomeMenuItems = menuItems.map((menuItem) => {
    //console.log(menuItem);

    return (
      <HomeMenuItem
        key={menuItem.id}
        menuItem={menuItem}
        afterSelection={afterSelection}
        currSelection={currSelection}
        setCurrSelection={setCurrSelection}
        inOrders={inOrders}
        setInOrders={setInOrders}
      />
    );
  });

  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <Switch>
        <Route exact path="/">
          <Home renderHomeMenuItems={renderHomeMenuItems} />
        </Route>
        <Route exact path="/orders">
          <Orders
            renderMenuItemsOrderPage={renderMenuItemsOrderPage}
            inOrders={inOrders}
            setInOrders={setInOrders}
            currSelection={currSelection}
            setCurrSelection={setCurrSelection}
            currSearch={currSearch}
            setCurrSearch={setCurrSearch}
          />
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
            renderMenuItems={renderMenuItems}
          />
        </Route>
        <Route exact path="/about">
          <About reviews={reviews} setReviews={setReviews} />
        </Route>
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
