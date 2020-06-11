import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import ErrorBoundary from "../components/error-boundary/error-boundary";
import RestaurantsService from "../services/restaurants-service";
import { RestaurantsServiceProvider } from "../services/restaurants-service-context";
import store from "../store";
import Header from "../components/header";
import Restaurants from "../components/restaurants";

import "./app.scss";

const restaurantsService = new RestaurantsService();

const App = () => {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <RestaurantsServiceProvider value={restaurantsService}>
          <Router>
            <Header />
            <Restaurants />
          </Router>
        </RestaurantsServiceProvider>
      </ErrorBoundary>
    </Provider>
  );
};

export default App;
