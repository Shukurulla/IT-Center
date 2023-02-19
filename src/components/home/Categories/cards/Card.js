import React from "react";
import "./card.css";

const Card = ({ img, title, description }) => {
  return (
    <div className="card">
      <div className="img__box">
        <img src={img} alt={title} />
      </div>
      <div className="card__info">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
