import React, { useState, useEffect } from "react";

const Search = ({ setSearch, changeQuery }) => {
  const [searchText, setSearchText] = useState("");
  const handleSearch = event => {
    const newSearchText = event.target.value;
    setSearchText(newSearchText);
  };

  const submitSearch = event => {
    const newSearchText = event.target.value;
    const offset = 0;
    if (event.keyCode === 13 && newSearchText.length > 3) {
      setSearch(newSearchText);
      changeQuery(offset);
    }
  };

  return (
    <div className="container search-wrapper">
      <input
        onKeyUp={submitSearch}
        onChange={handleSearch}
        type="text"
        value={searchText}
      ></input>
    </div>
  );
};

export default Search;
