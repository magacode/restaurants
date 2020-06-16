const restaurantsLoaded = (newRestaurants) => {
  return {
    type: "RESTOURANTS_LOADED",
    payload: newRestaurants,
  };
};

const cuisinesLoaded = (cuisines) => {
  return {
    type: "CUISINES_LOADED",
    payload: cuisines,
  };
};

export { restaurantsLoaded, cuisinesLoaded };
