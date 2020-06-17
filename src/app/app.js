import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import ErrorBoundary from "../components/error-boundary/error-boundary";
import RestaurantsService from "../services/restaurants-service";
import { RestaurantsServiceProvider } from "../services/restaurants-service-context";
import store from "../store";
import Navbar from "../components/navbar";
import Restaurants from "../components/restaurants";
import VendorList from "../components/vendor-list/vendor-list";

// import styles from "./app.module.scss";

const restaurantsService = new RestaurantsService();

const App = () => {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <RestaurantsServiceProvider value={restaurantsService}>
          <Router>
            <Navbar />
            <VendorList />
            {/* <Restaurants /> */}
          </Router>
        </RestaurantsServiceProvider>
      </ErrorBoundary>
    </Provider>
  );
};

export default App;
