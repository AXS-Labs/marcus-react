import { NEW_TIME } from '../actions';

export default (state = {}, action) => {
  switch(action.type) {
    case NEW_TIME:
      return Object.assign({}, state, { time: action.time });
    default:
      return state;
  }
}
