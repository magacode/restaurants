const initialState = {
  restaurants: [],
  cuisines: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "RESTOURANTS_LOADED":
      return {
        ...state,
        restaurants: action.payload,
      };

    case "CUISINES_LOADED":
      return {
        ...state,
        cuisines: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
