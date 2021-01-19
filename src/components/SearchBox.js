import React from "react";
import "./SearchBox.css";

const SearchBox = ({ searchValue }) => {
  return (
    <div className="nav pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search me"
        onChange={searchValue}
      />
    </div>
  );
};
export default SearchBox;
