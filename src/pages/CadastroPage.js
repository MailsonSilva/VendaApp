import React from 'react';
import {
  View,
  Button,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
} from 'react-native';
import produtos from '../../produtos.json';

class CadastroPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.findpro}>
          <TextInput
            style={styles.inputPro}
            placeholder="Produto"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Button
            title={'Pesquisar'}
            color={'#153973'}
            onPress={() => this.findProduto()}
          />
        </View>
        <FlatList
          data={produtos}
          renderItem={({item}) => (
            <View>
              <Text>{item.pro_descricao}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column',
  },
  findpro: {
    // marginBottom: 15,
    // marginTop: 10,
    flexDirection: 'row',
    // alignSelf: 'center',
  },
  inputPro: {
    fontSize: 20,
    height: 50,
    width: '75%',
    elevation: 1,
    padding: 10,
  },
});

export default CadastroPage;
