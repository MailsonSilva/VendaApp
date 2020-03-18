import {SET_FIELD, SAVE_SUCCESS} from '../actions';

const INITIAL_STATE = {
  pro_descricao: '',
  pro_valor: 0,
  pro_estoque: 0,
  pro_departamento: 'Alimentos',
  pro_unidade: 'KG',
};

export default function(state = {INITIAL_STATE}, action) {
  switch (action.type) {
    case SET_FIELD:
      const newState = {...state};
      newState[action.field] = action.value;
      return newState;
    case SAVE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
}
