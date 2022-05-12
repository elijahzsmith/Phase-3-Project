import React, { useState } from "react";
import MenuItem from "../components/MenuItem";
import Search from "../components/Search";
import NavBar from "../components/NavBar";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ChevronRight from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { autocompleteClasses, easing } from "@mui/material";
function Menu({
  menuItems,
  afterSearch,
  currSearch,
  setCurrSearch,
  afterSelection,
  currSelection,
  setCurrSelection,
  inOrders,
  setInOrders,
}) {


  const [menuState, setMenuState] = useState("main menu")
  const [open, setOpen] = React.useState(false);
  // console.log(afterSelection? afterSelection : null)
  // const renderMenuItems = afterSearch.map((menuItem) => {
  // this way let's you filter with drop down but cant do both at once
  const renderMenuItems = afterSelection.map((menuItem) => {
    //console.log(menuItem);

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
  const menuChoices = ["main menu", "breakfast", "lunch", "dinner", "appetizer", "dessert", "drinks"]
  const menuButtonCreator = menuChoices.map((choice) =>
    <button
      onClick={() => menuChoiceModal(choice)}
      onMouseEnter={() => setMenuState(choice)}
      className={choice === menuState ? "selectedMenuButton" : 'menuButton'}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ paddingLeft: '20px', fontWeight: 'bold', marginTop: 'auto', marginBottom: 'auto' }}>
          {choice.toUpperCase()}
        </div>
        <div style={{ paddingRight: '20px' }}>
          <ChevronRight />
        </div>
      </div>
    </button>
  )
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide easing={easing.cubic} direction="left" ref={ref} {...props} />;
  });

  function PopUpMenu(menuState) {
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    return (
      <div>
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
          style={{ left: '250px', }}
        >
          <div style={{ display: 'flex', width: '100%', height: '100%' }}>
            <div className='modalLeft'>
              <Button style={{ marginTop: '50px', marginLeft: '50px' }} onClick={handleClose}>
                <CloseIcon className='closeModalIcon' />
              </Button>
            </div>
            <div className='modalRight'>
              <div className='menu-state'>
                {menuState.toUpperCase()}
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    );
  }
  const menuChoiceModal = (choice) => {
    console.log(choice)
    setOpen(true)
    setCurrSelection(choice)
    console.log(afterSelection)
  }
  return (
    <div>
      {open ? PopUpMenu(menuState) : null}
      {/* <h1>Menu</h1> */}
      {/* <Search
        currSearch={currSearch}
        setCurrSearch={setCurrSearch}
        afterSelection={afterSelection}
        currSelection={currSelection}
        setCurrSelection={setCurrSelection}
      /> */}
      <select
        className="food-filter"
        onChange={(e) => setCurrSelection(e.target.value)}
      >
        {/* Not cuisine but I cant think of the word */}
        <option value="choose">Choose your cuisine</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="appetizer">Appetizer</option>
        <option value="desert">Dessert</option>
        <option value="drinks">Drinks</option>
      </select>

      <div className='menu' >
        <div className='menuLeft'>
          {menuButtonCreator}
        </div>
        <div className='menuRight' />
      </div>
      {/* {renderMenuItems} */}
    </div>
  );
}

export default Menu;
