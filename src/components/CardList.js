import React from "react";
import Card from "./Card";
import "./CardList.css";

const CardList = ({ cats }) => {
  return (
    <div className="cards">
      {cats.map((cat) => {
        return (
          <Card
            key={cat.id}
            // imgId={cat.reference_image_id}
            name={cat.name}
            description={cat.description}
            imgUrl={cat.imgUrl}
          />
        );
      })}
    </div>
  );
};

export default CardList;
