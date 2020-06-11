import React from "react";

import "./item.scss";

const Item = ({ list }) => {
  return list.map((item) => {
    return (
      <div className="item" key={item.restaurant_id}>
        <div className="item__pic"></div>
        <div className="item__descr">
          <p className="item__title">{item.restaurant_name}</p>
          <div className="item__info">
            <span className="item__time"></span>
            <span className="item__price"></span>
            <span className="item__stars">{item.price_range}</span>
          </div>
        </div>
      </div>
    );
  });
};

export default Item;
