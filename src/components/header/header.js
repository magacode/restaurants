import React from "react";

import Logo from "../logo";
import Address from "../address/address";

import "./header.scss";

const Header = () => {
  return (
    <header className="navbar navbar-light bg-light  header">
      <Logo />
      <Address />
    </header>
  );
};

export default Header;
