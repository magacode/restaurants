const initialState = {
  restaurants: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "RESTOURANTS_LOADED":
      return {
        restaurants: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
