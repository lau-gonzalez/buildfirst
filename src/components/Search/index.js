import React, { useState } from "react";
import "./Search.styles.css";
import searchIcon from "../../assets/search.jpg";
import filterIcon from "../../assets/filter.png";
import { FilterModal } from "../FilterModal";

const Search = ({ setSearchValue }) => {
  const [openFilterSection, setOpenFilterSection] = useState(false);
  const handleOnChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleOpenFilter = () => setOpenFilterSection(true);

  return (
    <div className="search-container">
      <input onChange={handleOnChange} classname="search-input" type="text" />
      <img className="search-icon" src={searchIcon} alt="search" />
      <img
        className="filter-icon"
        src={filterIcon}
        alt="filter"
        onClick={handleOpenFilter}
      />
      {openFilterSection && (
        <FilterModal setOpenFilterSection={setOpenFilterSection} />
      )}
    </div>
  );
};

export default Search;