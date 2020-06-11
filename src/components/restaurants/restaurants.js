import React, { Component } from "react";
import { connect } from "react-redux";

import { withRestaurantsService } from "../hoc-helpers";
import Item from "../item";

import "./restaurants.scss";

class Restaurants extends Component {
  componentDidMount() {
    const { restaurantsService } = this.props;
    const data = restaurantsService.getAllRestaurants();
    data.then((result) => {
      this.props.restaurantsLoaded(result);
    });
  }

  render() {
    if (!this.props.restaurants.data) {
      return <span>Loading...</span>;
    }

    return <Item list={this.props.restaurants.data} />;
  }
}

const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurants,
  };
};

const mapDispatchToProps = (dispath) => {
  return {
    restaurantsLoaded: (newRestaurants) => {
      dispath({
        type: "RESTOURANTS_LOADED",
        payload: newRestaurants,
      });
    },
  };
};

export default withRestaurantsService()(
  connect(mapStateToProps, mapDispatchToProps)(Restaurants)
);
