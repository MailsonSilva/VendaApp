import firebase from '@firebase/app';
import '@firebase/database';

export const SET_PRODUTOS = 'SET_PRODUTOS';
const setProduto = produto => ({
  type: SET_PRODUTOS,
  produto,
});

export const watchProdutos = () => {
  return dispatch => {
    firebase
      .database()
      .ref('/produto/')
      .on('value', snapshot => {
        const produto = snapshot.val(); //com destruct
        const action = setProduto(produto);
        dispatch(action);
      });
  };
};
