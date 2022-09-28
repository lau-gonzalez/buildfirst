import React, { useEffect, useState } from "react";
import { discountData } from "../mockup/constants";
import Card from "../Card";
import "./CardList.styles.css";
import { filterCards } from "../utils";

const CardList = ({ searchValue }) => {
  const [cardsToShow, setCardsToShow] = useState(discountData);

  useEffect(() => {
    if (discountData.length && searchValue) {
      const newCards = filterCards(discountData, searchValue);
      setCardsToShow(newCards);
    }

    if (!searchValue) {
      setCardsToShow(discountData);
    }
  }, [searchValue]);

  return (
    <div className="container">
      {cardsToShow.map((card) => (
        <Card key={card.title} data={card} />
      ))}
    </div>
  );
};

export default CardList;
