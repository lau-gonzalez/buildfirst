import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import CardList from "./components/CardList";

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [cardsToShow, setCardsToShow] = useState([]);
  const [sortedData, setSortedData] = useState([]);

  return (
    <div className="App">
      <Navbar setSearchValue={setSearchValue} setSortedData={setSortedData} />
      <CardList
        searchValue={searchValue}
        cardsToShow={cardsToShow}
        setCardsToShow={setCardsToShow}
        sortedData={sortedData}
      />
    </div>
  );
};

export default App;
