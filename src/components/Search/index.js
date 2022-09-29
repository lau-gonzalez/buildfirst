import React, { useState } from "react";
import "./Search.styles.css";
import searchIcon from "../../assets/search.jpg";
import filterIcon from "../../assets/filter.png";

const Search = ({ setSearchValue, setOpenFilterSection }) => {
  const handleOnChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleOpenFilter = () => setOpenFilterSection(true);

  return (
    <div className="search-container">
      <input onChange={handleOnChange} className="search-input" type="text" />
      <img className="search-icon" src={searchIcon} alt="search" />
      <img
        className="filter-icon"
        src={filterIcon}
        alt="filter"
        onClick={handleOpenFilter}
      />
    </div>
  );
};

export default Search;
