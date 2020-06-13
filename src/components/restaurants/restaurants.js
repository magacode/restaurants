import React, { Component } from "react";
import { connect } from "react-redux";

import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";
import { withRestaurantsService } from "../hoc-helpers";
import CardsList from "../cards-list/cards-list";

import "./restaurants.scss";

class Restaurants extends Component {
  state = {
    loading: true,
    error: false,
  };

  componentDidMount() {
    const { restaurantsService } = this.props;

    restaurantsService
      .getAllRestaurants()
      .then((result) => {
        this.props.restaurantsLoaded(result);
        this.setState({
          loading: false,
        });
      })
      .catch(this.onError);
  }

  onError = (err) => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  render() {
    const { loading, error } = this.state;

    const hasData = !(loading || error);

    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? (
      <CardsList list={this.props.restaurants.data} />
    ) : null;

    return (
      <div className="container">
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
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
