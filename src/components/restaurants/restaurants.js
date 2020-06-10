import React from "react";

import Search from "../search";

import "./restaurants.scss";
import Categories from "../categories";
import Item from "../item";

const Restaurants = () => {
  return (
    <div className="restaurants">
      <h1>Рестораны</h1>
      <Search />
      <Categories list={[]} />
      <Item list={[]} />
    </div>
  );
};

export default Restaurants;
