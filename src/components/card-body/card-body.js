import React from "react";

import "./card-body.scss";

const CardBody = ({ restaurant_name, price_range_100, id }) => {
  const priceRange = [];

  for (let i = 0; i < 3; i++) {
    priceRange.push(
      <span className={i < price_range_100 ? null : "text-muted"} key={i}>
        &#8381;
      </span>
    );
  }

  return (
    <div className="card-body">
      <h5 className="card-title text-truncate">{restaurant_name}</h5>
      <p className="card-text">
        <span className="badge badge-warning">
          <i className="fa fa-credit-card" aria-hidden="true"></i>
          <span className="card__range">{priceRange}</span>
        </span>
      </p>
    </div>
  );
};

export default CardBody;
