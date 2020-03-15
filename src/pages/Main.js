import React, {Component} from 'react';
import {View, Button, StyleSheet} from 'react-native';

export default class Main extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.containerButton}>
          <Button
            title={'Cadastro'}
            color={'#d49d08'}
            onPress={() => navigation.navigate('CadastroPage')}
          />
          <Button title={'Carrinho'} color={'#1c691c'} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f1edf7',
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
