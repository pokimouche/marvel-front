import React, { useState, useEffect } from "react";

const Search = ({ search, setSearch, changeQuery }) => {
  const handleSearch = event => {
    const newSearchText = event.target.value;

    setSearch(newSearchText);
  };

  const submitSearch = event => {
    const offset = 0;
    console.log("keycode", event.keyCode);

    if (event.keyCode === 13 && search.length > 3) {
      console.log("search", search);

      changeQuery(offset);
    }
  };

  return (
    <div className="container search-wrapper">
      <input
        onKeyUp={submitSearch}
        onChange={handleSearch}
        type="text"
        value={search}
      ></input>
    </div>
  );
};

export default Search;
