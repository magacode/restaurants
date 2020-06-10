import React from "react";

import "./categories.scss";

const Categories = ({ list }) => {
  return list.map((item) => {
    return (
      <button type="button" class="btn btn-outline-info">
        <img src={item.src} alt="" />
        {item.text}
      </button>
    );
  });
};

export default Categories;
