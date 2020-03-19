import firebase from '@firebase/app';
import '@firebase/database';

export const watchProdutos = () => {
  const {currentUser} = firebase.auth();
  return dispatch => {
    firebase
      .database()
      .ref('/produto/')
      .on('value', snapshot => {
        const series = snapshot.val(); //com destruct
        const action = setSeries(series);
        dispatch(action);
      });
  };
};
