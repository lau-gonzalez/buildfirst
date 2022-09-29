import React, { useContext, useState } from "react";
import { DataContext } from "../../hooks/DataContext";
import { discountData } from "../mockup/constants";
import { sortData } from "../utils";
import "./FilterModal.styles.css";

const RadioButton = ({ name, value, onChange, checked, label }) => (
  <div>
    <input
      type="radio"
      name={name}
      value={value}
      onChange={onChange}
      checked={checked}
    />
    <label>{label}</label>
  </div>
);

const FilterModal = ({ setOpenFilterSection, openFilterSection }) => {
  const [optionSelected, setOptionSelected] = useState("recomended");
  const [context, setContext] = useContext(DataContext);

  const handleSetOption = (e) => {
    setOptionSelected(e.target.value);
  };

  const handleApplyFilters = () => {
    const newData = sortData(optionSelected, discountData);
    setContext(newData);
    setOpenFilterSection(false);
  };

  return (
    <div
      className="modal"
      style={{ display: openFilterSection ? "block" : "none" }}
    >
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
            <RadioButton
              name="recomended"
              value="recomended"
              onChange={handleSetOption}
              checked={optionSelected === "recomended"}
              label="Recomended"
            />
            <RadioButton
              name="a-z"
              value="a-z"
              onChange={handleSetOption}
              checked={optionSelected === "a-z"}
              label="A - Z"
            />
            <RadioButton
              name="z-a"
              value="z-a"
              onChange={handleSetOption}
              checked={optionSelected === "z-a"}
              label="Z - A"
            />

            <RadioButton
              name="greatest"
              value="greatest"
              onChange={handleSetOption}
              checked={optionSelected === "greatest"}
              label="Greatest Saving"
            />
          </div>
        </div>
        <div>
          <h3>Seller</h3>
          <div className="seller-column">
            <div>
              {discountData.map((item) => (
                <div key={item.providerName}>
                  <span>{item.providerName}</span>;
                </div>
              ))}
            </div>
            <button onClick={handleApplyFilters}>APPLY</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
