import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import CardList from "./components/CardList";
import { DataContext } from "./hooks/DataContext";
import FilterModal from "./components/FilterModal";

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [cardsToShow, setCardsToShow] = useState([]);
  const [openFilterSection, setOpenFilterSection] = useState(false);

  return (
    <DataContext.Provider value={[cardsToShow, setCardsToShow]}>
      <Navbar
        setSearchValue={setSearchValue}
        setOpenFilterSection={setOpenFilterSection}
      />
      <CardList searchValue={searchValue} />
      <FilterModal
        setOpenFilterSection={setOpenFilterSection}
        openFilterSection={openFilterSection}
      />
    </DataContext.Provider>
  );
};

export default App;
