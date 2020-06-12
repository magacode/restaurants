import React from "react";

import Card from "../card";

import "./cards-list.scss";

const CardsList = ({ list }) => {
  return list.map(({ restaurant_id, ...items }) => {
    return <Card item={items} key={restaurant_id} />;
  });
};

export default CardsList;
