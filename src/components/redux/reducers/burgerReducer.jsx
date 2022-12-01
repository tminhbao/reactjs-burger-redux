const initialState = {
  burger: {
    salad: 1,
    cheese: 1,
    beef: 1,
  },
  menu: {
    salad: 10,
    cheese: 20,
    beef: 55,
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD CHEESE": {
      const newState = state;
      newState.arrayBurger.cheese++;
      state = newState;
      return { ...state, ...payload };
    }

    default:
      return state;
  }
};
