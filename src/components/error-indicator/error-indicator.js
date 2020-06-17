import React from "react";

import "./error-indicator.scss";
import icon from "./error-logo.png";

const ErrorIndicator = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="alert alert-danger mt-3 text-center" role="alert">
          <img src={icon} alt="" className="error__icon" />
          <p className="error__title">Error</p>
          <p className="error__descr">Something has gone terribly wrong</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorIndicator;
