import React from 'react';
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  ScrollView,
  Text,
  ActivityIndicator,
  Alert,
} from 'react-native';
import FormRow from '../components/FormRow';
import { connect } from 'react-redux';
import { setField, salvarProduto } from '../actions';

import _ from 'lodash'
import { TouchableOpacity } from 'react-native';

class CadastroPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      produtosSearched: [],
      // produtos a serem adicionados
      // deveria ser colocado no state do redux (?)
      produtosCarrinho: []
    };
  }

  // simulação dos produtos
  // caso usar api, não é necessário armazenar em memória
  // sugestão: criar algo do tipo: produto = {descricao, id} em vez de: produto = {pro_codigo, prod_descricao}
  produtos = require("../../produtos.json")

  searchProdutos = _.debounce((term) => {
    term = term.toLowerCase()
    // faz busca via js
    // depois é necessário fazer busca via api
    this.setState({
      produtosSearched: this.produtos.filter(produto => produto.pro_descricao.toLowerCase().includes(term))
    })
  })

  addProduto = (produto) => {
    this.setState({
      produtosCarrinho: [...this.state.produtosCarrinho, produto]
    })
  }

  render() {
    const { cadPro, setField } = this.props;

    return (
      <ScrollView style={styles.container}>
        <View>
          <FormRow first>
            <TextInput
              style={styles.inputPro}
              placeholder="Produto"
              placeholderTextColor="#91a9cf"
              autoCapitalize="words"
              value={cadPro.pro_descricao}
              onChangeText={this.searchProdutos}

            />

          </FormRow>
          {!!this.state.produtosSearched.length && <View
            style={{
              backgroundColor: 'white',
              width: '100%',
            }}
          >
            {this.state.produtosSearched.map((produto) => {
              // faz a renderização dos produtos filtrados a partir da busca
              // customizar...
              return <TouchableOpacity
                onPress={() => {
                  // add no carrinho
                  this.addProduto(produto)
                }}
                key={produto.pro_codigo}
              >
                <Text
                  style={{
                    fontSize: 20,
                    padding: 10,
                    textAlign: 'center'
                  }}
                >
                  {produto.pro_descricao}
                </Text>
              </TouchableOpacity>
            })}
          </View>}
          {/* <FormRow>
              <View style={styles.viewButton}>
                <Button title={'Adicionar'} />
              </View>
            </FormRow> */}
          <FormRow>
            <View style={styles.inputForm}>
              {/* <Text>teste</Text> */}
              {this.state.produtosCarrinho.map((produto) => {
                // renderização dos produtos no carrinho
                return <Text key={produto.pro_codigo} style={{
                  color: 'white',
                  fontSize: 20,
                  padding: 10,
                }}>
                  {produto.pro_descricao}
                </Text>
              })}
            </View>
          </FormRow>
        </View>
        <View style={styles.viewButton}>
          {this.state.isLoading ? (
            <ActivityIndicator size="large" color="#FFF" />
          ) : (
              <Button
                title={'Salvar'}
                color={'green'}
                onPress={async () => {
                  this.setState({ isLoading: true });
                  try {
                    // agora é possível pegar os produtos do carrinho e salvar aqui
                    const { cadPro, salvarProduto } = this.props;
                    await salvarProduto(cadPro);
                    //   navigation.goBack(); .volta a página anterior.;
                  } catch (error) {
                    Alert.alert('Erro!', error.message);
                  } finally {
                    this.setState({ isLoading: false });
                  }
                }}
              />
            )}
        </View>
        <View style={styles.marginFooter} />
      </ScrollView >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#113063',
  },
  inputPro: {
    fontSize: 18,
    padding: 10,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 10,
    borderRadius: 10,
    borderColor: '#FFF',
    borderWidth: 1,
    backgroundColor: '#113063',
    color: '#FFF',
  },
  viewButton: {
    justifyContent: 'space-evenly',
    marginTop: 15,
    marginHorizontal: 25,
  },
  inputForm: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 10,
    paddingBottom: 300,
    borderRadius: 10,
    borderColor: '#FFF',
    borderWidth: 1,
    backgroundColor: '#113063',
  },
  marginFooter: { marginBottom: 10 },
});

function mapStateToProps(state) {
  return {
    cadPro: state.cadPro,
  };
}

const mapDispatchToProps = {
  setField,
  salvarProduto,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CadastroPage);
