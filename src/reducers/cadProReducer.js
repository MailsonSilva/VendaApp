import {SET_FIELD} from '../actions';

const INITIAL_STATE = {
  pro_descricao: '',
  pro_valor: 0,
  pro_estoque: 0,
  pro_departamento: '',
  pro_unidade: '',
};

export default function(state = {INITIAL_STATE}, action) {
  switch (action.type) {
    case SET_FIELD:
      const newState = {...state};
      newState[action.field] = action.value;
      return newState;
    default:
      return state;
  }
}
