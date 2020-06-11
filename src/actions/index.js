const restaurantsLoaded = (newRestaurants) => {
  return {
    type: "RESTOURANTS_LOADED",
    payload: newRestaurants,
  };
};

export { restaurantsLoaded };
