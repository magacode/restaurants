import React from "react";
import { Link } from "react-router-dom";

import "./logo.scss";

import logo from "./logo.png";

const Logo = () => {
  return (
    <Link to="/" className="navbar-brand  logo">
      <img
        src={logo}
        alt="Logo"
        className="d-inline-block align-top logo__pic"
      />
      <span className="logo__text">RestaurantsApp</span>
    </Link>
  );
};

export default Logo;
