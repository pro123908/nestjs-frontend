const initialState = {};

const Reducer1 = (state = initialState, action) => {
  switch (action.type) {
    case "case_1":
      return { ...state };

    default:
      return state;
  }
};

export default Reducer1;
