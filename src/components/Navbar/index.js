import React from "react";
import Search from "../Search";
import "./Navbar.styles.css";

const Navbar = ({ setSearchValue, setCardsToShow }) => {
  return (
    <div className="navbar-container">
      <h1>Builtfirst</h1>
      <Search setSearchValue={setSearchValue} setCardsToShow={setCardsToShow} />
    </div>
  );
};

export default Navbar;
