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
      let burgerUpdate = { ...state.burger };
      burgerUpdate[key] += value;
      state.burger = burgerUpdate;
      return { ...state };
    }

    default:
      return state;
  }
};
