import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools} from 'redux-devtools-extention'

const initialState = {counter: {value: 0}, user: {}}

const reduser = ((state = initialState, {type, payload}) => {
    
    switch(type) {
        case 'counter/increment':
            return {...state,counter:{...state.counter, value:state.counter.value + payload}}

        case 'counter/decrement':
            return { value: state.value - paylaod}

        default:
            return state;
    }

};

const store = createStore(reduser,composeWithDevTools())

export default store

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