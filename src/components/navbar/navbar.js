import React from "react";

import Logo from "../logo";
import Navs from "../navs";
import Address from "../address/address";
import Authorization from "../authorization";
import Basket from "../basket";

import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Logo />
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <Navs
        links={[
          { id: 0, src: "/", title: "Рестораны" },
          { id: 1, src: "/", title: "Магазины" },
        ]}
      />
    </nav>
  );
};

export default Navbar;
