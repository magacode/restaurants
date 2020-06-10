import React from "react";

import "./basket.scss";

const Basket = () => {
  return (
    <button className="btn btn-link basket__btn">
      <i className="fa fa-shopping-cart" aria-hidden="true"></i>
      <span className="basket__text">Корзина</span>
    </button>
  );
};

export default Basket;
