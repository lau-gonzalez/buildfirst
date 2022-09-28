import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import CardList from "./components/CardList";

function App() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="App">
      <Navbar setSearchValue={setSearchValue} />
      <CardList searchValue={searchValue} />
    </div>
  );
}

export default App;
