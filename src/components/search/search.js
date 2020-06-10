import React from "react";

import "./search.scss";

const Search = () => {
  return (
    <div className="search">
      <input type="text" placeholder="Название, кухня или блюдо..." />
      <button className="btn btn-link authorization__btn">
        <i className="fa fa-filter" aria-hidden="true"></i>
        <span className="authorization__text">Войти</span>
      </button>
    </div>
  );
};

export default Search;
