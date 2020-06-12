import React from "react";

import "./item.scss";

const Item = ({ list }) => {
  return list.map((item) => {
    return (
      <div className="col mb-4" key={item.restaurant_id}>
        <div className="card h-100">
          {item.src ? (
            <img src={item.src} className="img-fluid mx-auto" alt="..." />
          ) : (
            <i className="fa fa-picture-o mx-auto" aria-hidden="true"></i>
          )}

          <div className="card-body">
            <h5 className="card-title">{item.restaurant_name}</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
    );
  });
};

export default Item;
