import React from "react";

import "./card-body.scss";

const CardBody = ({ restaurantName, priceRange }) => {
  const priceRangeStatus = [];

  for (let i = 0; i < 3; i++) {
    priceRangeStatus.push(
      <span className={i < priceRange ? null : "text-muted"} key={i}>
        &#8381;
      </span>
    );
  }

  return (
    <div className="card-body">
      <h5 className="card-title text-truncate">{restaurantName}</h5>
      <p className="card-text">
        <span className="badge badge-warning">
          <i className="fa fa-credit-card" aria-hidden="true"></i>
          <span className="card__range">{priceRangeStatus}</span>
        </span>
      </p>
    </div>
  );
};

export default CardBody;
