import React from "react";

import { RestaurantsServiceConsumer } from "../../services/restaurants-service-context";
import Search from "../search";

import "./restaurants.scss";
import Categories from "../categories";
import Item from "../item";

const Restaurants = () => {
  return (
    <div className="restaurants">
      <h1>Рестораны</h1>
      <RestaurantsServiceConsumer>
        {(restaurantsService) => {
          restaurantsService
            .getAllRestaurants()
            .then((result) => console.log(result));
        }}
      </RestaurantsServiceConsumer>

      <Search />
      <Categories list={[]} />
      <Item list={[]} />
    </div>
  );
};

export default Restaurants;
