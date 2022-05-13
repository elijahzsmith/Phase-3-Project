import React from "react";
import TextField from '@mui/material/TextField'
import {styled} from '@mui/material/styles';
function Search({ currSearch, setCurrSearch, afterSelection,
  currSelection,
  setCurrSelection }) {
    // const CssTextField = styled(TextField)({
    //   '& label.Mui-focused': {
    //     color: 'pink',
    //   },
    //   '& .MuiInput-underline:after': {
    //     borderBottomColor: 'pink',
    //     color: 'pink',
    //   },
    //   '& .MuiOutlinedInput-root': {
    //     '& fieldset': {
    //       borderColor: 'pink',
    //       color: 'pink',
    //     },
    //     '&:hover fieldset': {
    //       borderColor: 'pink',
    //       color: 'pink',
    //     },
    //     '&.Mui-focused fieldset': {
    //       borderColor: 'pink',
    //       color: 'pink',
    //     },
    //   },
    // });
  return (
    <div>
      <form>
      {/* <CssTextField placeholder='what are you craving?' style={{ color: 'pink' }} id="custom-css-outlined-input" /> */}
        <input
          type="text"
          value={currSearch}
          onChange={(e) => setCurrSearch(e.target.value)}
          placeholder="What are you craving?"
          style={{background: 'black', color: 'pink'}}
        ></input>
      </form>
      {/* Insert image of food/restaurant */}
    </div>
  );
}

export default Search;
