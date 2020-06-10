import React from "react";

import "./address.scss";

const Address = () => {
  return (
    <div className="address">
      <i className="fa fa-map-marker fa-lg" aria-hidden="true"></i>
      <input
        type="text"
        className="address__input"
        placeholder="Укажите адрес доставки"
      />
    </div>
  );
};

export default Address;
