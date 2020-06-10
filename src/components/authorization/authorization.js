import React from "react";

import "./authorization.scss";

const Authorization = () => {
  return (
    <button className="btn btn-link authorization__btn">
      <i className="fa fa-user-o" aria-hidden="true"></i>
      <span className="authorization__text">Войти</span>
    </button>
  );
};

export default Authorization;
