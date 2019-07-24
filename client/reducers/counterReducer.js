import { createStore } from 'redux';

const initialState = {
  count: 0
}

const counterReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'CHANGE_COUNT':
      return {
        ...state,
        count: action.payload
      }
    default:
      return state;
  }
};

export default createStore(counterReducer);