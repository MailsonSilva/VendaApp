import {SET_PRODUTOS} from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case SET_PRODUTOS:
      return action.produto;
    default:
      return state;
  }
}
