import React from "react";

import Cuisines from "../cuisines";
import CardsList from "../cards-list/cards-list";

import "./vendor-list.scss";

const VendorList = ({ data }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">12</div>
      </div>
      <div className="row">
        <div className="col-12">
          <CardsList />
        </div>
      </div>
    </div>
  );
};

export default VendorList;
