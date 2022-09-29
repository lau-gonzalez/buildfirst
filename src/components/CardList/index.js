import React, { useContext, useEffect } from "react";
import { discountData } from "../mockup/constants";
import Card from "../Card";
import "./CardList.styles.css";
import { filterCards } from "../utils";
import { DataContext } from "../../hooks/DataContext";

const CardList = ({ searchValue }) => {
  const [context, setContext] = useContext(DataContext);

  useEffect(() => {
    if (discountData.length && searchValue) {
      const newCards = filterCards(discountData, searchValue);
      setContext(newCards);
    }

    if (!searchValue) {
      setContext(discountData);
    }
  }, [searchValue, setContext]);

  return (
    <div className="container">
      {context.map((card) => (
        <Card key={card.title} data={card} />
      ))}
    </div>
  );
};

export default CardList;
