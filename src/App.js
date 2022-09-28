import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import CardList from "./components/CardList";

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [cardsToShow, setCardsToShow] = useState([]);

  return (
    <div className="App">
      <Navbar setSearchValue={setSearchValue} setCardsToShow={setCardsToShow} />
      <CardList
        searchValue={searchValue}
        cardsToShow={cardsToShow}
        setCardsToShow={setCardsToShow}
      />
    </div>
  );
};

export default App;
