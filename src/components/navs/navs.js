import React from "react";
import { Link } from "react-router-dom";

import "./navs.scss";

const Navs = ({ links }) => {
  return (
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        {links.map(({ id, src, title }) => {
          return (
            <Link to={src} className="nav-item nav-link" key={id}>
              {title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navs;
