import { combineReducers } from "redux";
import actionTypes from "./counter-types";

const valueReducer = (state = 10, { type, payload }) => {
  switch (type) {
    case actionTypes.INCREMENT:
      return state + payload;

    case actionTypes.DECREMENT:
      return state - payload;

    default:
      return state;
  }
};

export default combineReducers({
  value: valueReducer,
});
