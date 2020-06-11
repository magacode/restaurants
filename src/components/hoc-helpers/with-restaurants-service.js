import React from "react";

import { RestaurantsServiceConsumer } from "../../services/restaurants-service-context";

const withRestaurantsService = () => (Wrapped) => {
  return (props) => (
    <RestaurantsServiceConsumer>
      {(restaurantsService) => {
        return <Wrapped {...props} restaurantsService={restaurantsService} />;
      }}
    </RestaurantsServiceConsumer>
  );
};

export default withRestaurantsService;
