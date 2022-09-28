import React, { useEffect } from "react";
import { discountData } from "../mockup/constants";
import Card from "../Card";
import "./CardList.styles.css";
import { filterCards } from "../utils";

const CardList = ({ searchValue, cardsToShow, setCardsToShow }) => {
  useEffect(() => {
    if (discountData.length && searchValue) {
      const newCards = filterCards(discountData, searchValue);
      setCardsToShow(newCards);
    }

    if (!searchValue) {
      setCardsToShow(discountData);
    }
  }, [searchValue, setCardsToShow]);

  return (
    <div className="container">
      {cardsToShow.map((card) => (
        <Card key={card.title} data={card} />
      ))}
    </div>
  );
};

export default CardList;
