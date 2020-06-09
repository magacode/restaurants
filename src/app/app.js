import React from "react";

import ErrorBoundary from "../components/error-boundary/error-boundary";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/navbar";
import "./app.scss";

const App = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
