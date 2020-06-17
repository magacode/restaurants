import React, { Component } from "react";
import { connect } from "react-redux";

import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";
import { withRestaurantsService } from "../hoc-helpers";
import Cuisines from "../cuisines";
import CardsList from "../cards-list/cards-list";

import "./restaurants.scss";

class Restaurants extends Component {
  state = {
    loading: true,
    loadingСuisines: true,
    error: false,
  };

  componentDidMount() {
    const { restaurantsService } = this.props;

    const cuisines = restaurantsService.getAllСuisines();
    this.props.cuisinesLoaded(cuisines);

    this.setState({
      loadingСuisines: false,
    });

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

  onSelectedСuisine = (cuisine) => {
    const { restaurantsService } = this.props;

    this.setState({
      loading: true,
    });

    restaurantsService
      .getСuisine(1, cuisine)
      .then((result) => {
        this.props.restaurantsLoaded(result);
        this.setState({
          loading: false,
        });
      })
      .catch(this.onError);
  };

  render() {
    const { loading, loadingСuisines, error } = this.state;

    const hasData = !(loading || error);
    const hasCuisinesData = !(loadingСuisines || error);

    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading || loadingСuisines ? <Spinner /> : null;

    const content = hasData ? (
      <CardsList list={this.props.restaurants.data} />
    ) : null;

    const cuisines = hasCuisinesData ? (
      <Cuisines
        сuisines={this.props.cuisines}
        onSelectedСuisine={this.onSelectedСuisine}
      />
    ) : null;

    return (
      <div className="container">
        {cuisines}
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
    cuisines: state.cuisines,
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
    cuisinesLoaded: (cuisines) => {
      dispath({
        type: "CUISINES_LOADED",
        payload: cuisines,
      });
    },
  };
};

export default withRestaurantsService()(
  connect(mapStateToProps, mapDispatchToProps)(Restaurants)
);
