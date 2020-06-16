import React from "react";
import { Link } from "react-router-dom";

import "./сuisines.scss";

const Cuisines = ({ сuisines, onSelectedСuisine }) => {
  return (
    <ul className="cuisines">
      {сuisines.map(({ icon, title, value }, idx) => {
        return (
          <li className="cuisines__item" key={idx}>
            <Link
              to="/"
              className="cuisines__link"
              onClick={() => onSelectedСuisine(value)}
            >
              <img
                src={icon}
                alt={`cuisine-${title}`}
                className="cuisines__icon"
              />
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Cuisines;
