import React from "react";
import { Link } from "react-router-dom";

import "./logo.scss";

import logo from "./logo.png";

const Logo = () => {
  return (
    <Link to="/" className="navbar-brand logo">
      <img src={logo} alt="Logo" className="logo__pic" />
    </Link>
  );
};

export default Logo;
