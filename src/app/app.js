import React from "react";

import ErrorBoundary from "../components/error-boundary/error-boundary";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/header";
import Slider from "../components/slider/slider";
import Restaurants from "../components/restaurants";
import Footer from "../components/footer";

import "./app.scss";

const App = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Header />
        <Slider />
        <Restaurants />
        <Footer />
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
