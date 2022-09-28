import React from "react";
import Search from "../Search";
import "./Navbar.styles.css";

const Navbar = ({ setSearchValue }) => {
  return (
    <div className="navbar-container">
      <h1>Builtfirst</h1>
      <Search setSearchValue={setSearchValue} />
    </div>
  );
};

export default Navbar;
