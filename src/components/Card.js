import React from "react";
import "./style.css";

const Card = ({ imgSrc, imgAlt, user, description }) => {
  return (
    <div className="suggest-card">
      <div className="img">
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <div className="ms-3">
        <p className="use mb-1">{user}</p>
        <p className="desc">{description}</p>
      </div>
    </div>
  );
};

export default Card;
