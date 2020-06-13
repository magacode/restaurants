import React from "react";

import Picture from "../picture/picture";
import CardBody from "../card-body";

import "./card.scss";

const Card = ({ item: { src, restaurant_name, price_range_100 }, id }) => {
  return (
    <div className="col mb-4" key={id}>
      <div className="card h-100">
        <Picture src={src} />
        <CardBody
          restaurantName={restaurant_name}
          priceRange={price_range_100}
        />
      </div>
    </div>
  );
};

export default Card;
