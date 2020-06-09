import React from "react";

import "./app.scss";
import ErrorBoundary from "../components/error-boundary/error-boundary";

const App = () => {
  return (
    <ErrorBoundary>
      <div>Hello World</div>
    </ErrorBoundary>
  );
};

export default App;
