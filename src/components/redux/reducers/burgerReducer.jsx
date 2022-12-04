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
  total: 85,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "CHANGE_QUANTITY": {
      let { key, value } = payload;
      if (value === -1 && state.burger[key] < 1) return { ...state };
      let burgerUpdate = { ...state.burger };
      burgerUpdate[key] += value;
      state.burger = burgerUpdate;
      // Calculate total money
      state.total += value * state.menu[key];
      return { ...state };
    }

    default:
      return state;
  }
};
