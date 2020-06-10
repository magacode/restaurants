import React from "react";

import Logo from "../logo";

import "./footer.scss";

const Footer = () => {
  return (
    <footer className="container py-5">
      <div className="row">
        <div className="col-12 col-md">
          <Logo />

          <small className="d-block mb-3 text-muted">© 2017-2020</small>
        </div>
        <div className="col-6 col-md">
          <h5>Рестораны</h5>
          <ul className="list-unstyled text-small">
            <li></li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>Ресурсы</h5>
          <ul className="list-unstyled text-small">
            <li></li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>О компании</h5>
          <ul className="list-unstyled text-small">
            <li></li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>Контакты</h5>
          <ul className="list-unstyled text-small">
            <li></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
