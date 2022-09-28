import React from "react";
import "./Card.styles.css";
import companyLogo from "../../assets/company.png";

const Card = ({ data }) => {
  return (
    <div className="card-container">
      <div className="card-header">
        <img className="card-logo" src={companyLogo} alt={data.providerName} />
        <span className="card-name">{data.providerName}</span>
      </div>
      <div className="card-title-container">
        <span className="card-title">{data.title}</span>
        <span className="card-discount">Save: {data.save}</span>
      </div>
      <p>{data.description}</p>
    </div>
  );
};

export default Card;
