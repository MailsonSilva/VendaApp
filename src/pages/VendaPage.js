import React from 'react';
import {
  View,
  Button,
  StyleSheet,
  FlatList,
  Text,
  ActivityIndicator,
  ScrollView,
} from 'react-native';

import {connect} from 'react-redux';
import {watchProdutos} from '../actions';

import SearchBar from 'react-native-search-bar';

class VendaPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      pro: [],
    };
  }
  componentDidMount() {
    this.props.watchProdutos();
  }

  renderItem = ({item}) => (
    <View style={styles.viewList}>
      <Text style={styles.textItens}>{item.pro_descricao}</Text>
      <Text style={styles.textItens}>{1}</Text>
      <Text style={styles.textItens}>{item.pro_valor}</Text>
      <Text style={styles.textItens}>{item.pro_valor}</Text>
    </View>
  );

  render() {
    const {produto} = this.props;

    return (
      <ScrollView style={styles.container}>
        <View style={styles.search}>
          <SearchBar
            placeholder="Produto"
            // value={}
            //onChangeText={this.searchProdutos}
          />
        </View>
        <View style={styles.viewButton}>
          <Button title={'Adicionar'} />
        </View>
        <View style={styles.inputForm}>
          <View style={styles.viewItens}>
            <Text style={styles.textItens}>Descrição</Text>
            <Text style={styles.textItens}>Quant.</Text>
            <Text style={styles.textItens}>Vlr.Unit</Text>
            <Text style={styles.textItens}>Vlr.Total</Text>
          </View>

          <FlatList
            // horizontal={true}
            data={produto}
            keyExtractor={item => item.id}
            renderItem={this.renderItem}
          />
        </View>

        <View style={styles.viewButton}>
          {this.state.isLoading ? (
            <ActivityIndicator size="large" color="#FFF" />
          ) : (
            <Button title={'Salvar'} color={'#1c691c'} />
          )}
        </View>
        <View style={styles.marginFooter} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#113063',
  },
  search: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
  viewButton: {
    justifyContent: 'space-evenly',
    marginTop: 10,
    marginHorizontal: 10,
  },
  inputForm: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,

    borderRadius: 10,
    borderColor: '#FFF',
    borderWidth: 1,
    backgroundColor: '#113063',
  },
  viewItens: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderBottomWidth: 1,
    borderColor: '#FFF',
  },
  viewList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textItens: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFF',
    margin: 10,
    fontFamily: 'Courier New',
  },
  marginFooter: {marginBottom: 20},
});

const mapStateToProps = state => {
  const {produto} = state;
  if (produto === null) {
    return {produto};
  }

  const keys = Object.keys(produto);
  const produtoWithKeys = keys.map(id => {
    return {...produto[id], id};
  });
  return {produto: produtoWithKeys};
};

export default connect(
  mapStateToProps,
  {watchProdutos},
)(VendaPage);
