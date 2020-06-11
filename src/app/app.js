import React, { useState } from "react";

import ErrorBoundary from "../components/error-boundary/error-boundary";
import { BrowserRouter } from "react-router-dom";
import { RestaurantsServiceProvider } from "../services/restaurants-service-context";
import RestaurantsService from "../services/restaurants-service";
import Header from "../components/header";
import Slider from "../components/slider/slider";
import Restaurants from "../components/restaurants";
import Footer from "../components/footer";

import "./app.scss";

const App = () => {
  const [service] = useState(new RestaurantsService());

  return (
    <ErrorBoundary>
      <RestaurantsServiceProvider value={service}>
        <BrowserRouter>
          <Header />
          <Slider />
          <Restaurants />
          <Footer />
        </BrowserRouter>
      </RestaurantsServiceProvider>
    </ErrorBoundary>
  );
};

export default App;
