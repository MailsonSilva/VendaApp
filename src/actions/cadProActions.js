import firebase from '@firebase/app';
import '@firebase/database';

export const SET_FIELD = 'SET_FIELD';
export const setField = (field, value) => {
  return {
    type: SET_FIELD,
    field,
    value,
  };
};

export const SAVE_SUCCESS = 'SAVE_SUCCESS';
const saveSuccess = () => ({
  type: SAVE_SUCCESS,
});

export const salvarProduto = produto => {
  return async dispatch => {
    await delay(400);
    const db = firebase.database();
    if (produto.id) {
      await db.ref(`/produto/${produto.id}`).set(produto); //atualiza produto
    } else {
      await db.ref('/produto/').push(produto); //salva novo produto
    }
    dispatch(saveSuccess());
  };
};
const delay = ms =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(), ms);
  });
