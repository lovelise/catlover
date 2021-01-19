import React from "react";
import "./Card.css";

const Card = ({ name, description, imgId, imgUrl }) => {
  return (
    <div className=" card dib br3 pa3 grow bw2 shadow-4 margin">
      <img alt="cats" src={imgUrl} width="600px" height="atuo" />
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
