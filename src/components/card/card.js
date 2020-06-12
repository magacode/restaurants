import React from "react";

import Picture from "../picture/picture";
import CardBody from "../card-body";

import "./card.scss";

const Card = ({
  item: { restaurant_id, src, restaurant_name, price_range_100 },
}) => {
  return (
    <div className="col mb-4" key={restaurant_id}>
      <div className="card h-100">
        <Picture src={src} />
        <CardBody
          restaurant_name={restaurant_name}
          price_range_100={price_range_100}
        />
      </div>
    </div>
  );
};

export default Card;
