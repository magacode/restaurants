import React from "react";

import "./item.scss";

const Item = ({ list }) => {
  return list.map((item) => {
    return (
      <div className="item">
        <div className="item__pic">
          <img src={item.src} alt="" />
        </div>
        <div className="item__descr">
          <p className="item__title"></p>
          <div className="item__info">
            <span className="item__time"></span>
            <span className="item__price"></span>
            <span className="item__stars"></span>
          </div>
        </div>
      </div>
    );
  });
};

export default Item;
