import { combineReducers } from "redux";

const item = (state = [], { type, payload }) => {
  switch (type) {
    case "ADD":
      return [...state, payload];

    case 'DELETE':
        return state.filter(({id}) => id !== payload)

    default:
      return state;
  }
};

const filter = (state = "", { type, payload }) => {
  return state;
};

export default combineReducers({
  item,
  filter,
});
