import React, { useState } from "react";
import { discountData } from "../mockup/constants";
import { sortData } from "../utils";
import "./FilterModal.styles.css";

export const FilterModal = ({ setOpenFilterSection, setCardsToShow }) => {
  const [optionSelected, setOptionSelected] = useState("recomended");

  const handleSetOption = (e) => {
    setOptionSelected(e.target.value);
  };

  const handleApplyFilters = () => {
    const newData = sortData(optionSelected, discountData);
    setOpenFilterSection(false);
    console.log(newData);
    setCardsToShow(newData);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div>
          <span
            style={{ cursor: "pointer" }}
            onClick={() => setOpenFilterSection(false)}
          >
            X
          </span>
          <h3>Sort</h3>
          <div>
            <div>
              <input
                type="radio"
                id="recomended"
                name="recomended"
                value="recomended"
                onChange={handleSetOption}
                defaultChecked
                checked={optionSelected === "recomended"}
              />
              <label for="recomended">Recomended</label>
            </div>
            <div>
              <input
                type="radio"
                id="a-z"
                name="a-z"
                value="a-z"
                onChange={handleSetOption}
                checked={optionSelected === "a-z"}
              />
              <label for="a-z">A - Z</label>
            </div>
            <div>
              <input
                type="radio"
                id="z-a"
                name="z-a"
                value="z-a"
                onChange={handleSetOption}
                checked={optionSelected === "z-a"}
              />
              <label for="z-a">Z - A</label>
            </div>
            <div>
              <input
                type="radio"
                id="greatest"
                name="greatest"
                value="greatest"
                onChange={handleSetOption}
                checked={optionSelected === "greatest"}
              />
              <label for="greatest">Greatest Saving</label>
            </div>
          </div>
        </div>
        <div>
          <h3>Seller</h3>
          <div>
            {discountData.map((item) => (
              <div>
                <span>{item.providerName}</span>;
              </div>
            ))}
          </div>
        </div>
        <button onClick={handleApplyFilters}>APPLY</button>
      </div>
    </div>
  );
};
