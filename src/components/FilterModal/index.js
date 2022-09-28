import React, { useEffect, useState } from "react";
import { discountData } from "../mockup/constants";
import "./FilterModal.styles.css";

// sortedData [{char: A, value: [name1, name2]}];

const sortData = (option) => {
  const field = option === "greatest" ? "save" : "providerName";
  let sortedData = [];

  if (option === "z-a") {
    sortedData = discountData.sort((a, b) => {
      if (a[field] > b[field]) {
        return -1;
      }

      if (a[field] < b[field]) {
        return 1;
      }

      return 0;
    });

    return sortedData;
  }

  sortedData = discountData.sort((a, b) => {
    if (a[field] > b[field]) {
      return 1;
    }

    if (a[field] < b[field]) {
      return -1;
    }

    return 0;
  });

  return sortedData;
};

export const FilterModal = ({ setOpenFilterSection }) => {
  const [optionSelected, setOptionSelected] = useState("recomended");
  const [sortedData, setSortedData] = useState(sortData(optionSelected));

  const handleSetOption = (e) => {
    setOptionSelected(e.target.value);
  };

  useEffect(() => {
    const newSortData = sortData(optionSelected);
    setSortedData(newSortData);
  }, [optionSelected]);

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
            {sortedData.map((item) => (
              <div>
                <span>{item.providerName}</span>;
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
