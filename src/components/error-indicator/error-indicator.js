import React from "react";

import "./error-indicator.scss";
import icon from "./error-logo.png";

const ErrorIndicator = () => {
  return (
    <div className="error__indicator">
      <img src={icon} alt="error__icon" className="error__icon" />
      <span className="error__title">Error</span>
      <span className="error__descr">something has gone terribly wrong</span>
    </div>
  );
};

export default ErrorIndicator;
