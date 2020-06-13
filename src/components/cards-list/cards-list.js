import React from "react";

import Card from "../card";

import "./cards-list.scss";

const CardsList = ({ list }) => {
  return (
    <div className="row row-cols-1 row-cols-md-3 pt-3">
      {list.map(({ restaurant_id, ...items }) => {
        return <Card item={items} key={restaurant_id} id={restaurant_id} />;
      })}
    </div>
  );
};

export default CardsList;
