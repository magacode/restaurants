import React from "react";

import Logo from "../logo";
import Address from "../address/address";

import "./header.scss";
import Authorization from "../authorization";

const Header = () => {
  return (
    <header className="navbar navbar-light bg-light  header">
      <Logo />
      <Address />
      <Authorization />
    </header>
  );
};

export default Header;
