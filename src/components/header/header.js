import React from "react";

import Logo from "../logo";
import Address from "../address/address";
import Authorization from "../authorization";
import Basket from "../basket";

// import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className="navbar navbar-light bg-light  header">
      <div className="header__left">
        <Logo />
        <Address />
      </div>
      <div className="header__right">
        <Authorization />
        <Basket />
      </div>
    </header>
  );
};

export default Header;
