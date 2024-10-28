const initialState = {
    count: 0,
  };
  
  export default function counterReducer(state = initialState, action) {
    switch (action.type) {
      case 'INCREMENT':
        return { ...state, count: state.count + action.payload.amount };
      case 'DECREMENT':
        return { ...state, count: state.count - action.payload.amount };
      default:
        return state;
    }
  }
  