import React from "react";

function Search({ currSearch, setCurrSearch, afterSelection,
  currSelection,
  setCurrSelection }) {
  return (
    <div>
      {/* Make controlled form */}
      <form>
        <input
          type="text"
          value={currSearch}
          onChange={(e) => setCurrSearch(e.target.value)}
          placeholder="Search menu..."
        ></input>
      </form>
      {/* Insert image of food/restaurant */}
    </div>
  );
}

export default Search;
