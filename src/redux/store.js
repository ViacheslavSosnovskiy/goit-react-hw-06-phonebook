import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extention";
import counterReducer from "./count/counter-reducer";
import todosReducer from "./todos/todos-reduser";

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;

// import {connect} from 'react-redax';

// const mapStateToProps = state => {
//     return {
//         value: state.counterValue
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         onIncrement: () => dispatch(actions.increment(5)),
//         onDecrement: () => dispatch(actions.decrement(5)),
//     }
// }
//  export default connect(mapStateToProps, mapDispatchToB )(Counter)
