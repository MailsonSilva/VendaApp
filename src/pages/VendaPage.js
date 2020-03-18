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
import {connect} from 'react-redux';
import {setField, salvarProduto} from '../actions';

class CadastroPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
    };
  }

  render() {
    const {cadPro, setField} = this.props;

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
              onChangeText={value => setField('pro_descricao', value)}
            />
          </FormRow>
          <FormRow>
            <View style={styles.viewButton}>
              <Button title={'Adicionar'} />
            </View>
          </FormRow>
          <FormRow>
            <View style={styles.inputForm}>
              <Text>teste</Text>
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
                this.setState({isLoading: true});
                try {
                  const {cadPro, salvarProduto} = this.props;
                  await salvarProduto(cadPro);
                  //   navigation.goBack(); .volta a página anterior.;
                } catch (error) {
                  Alert.alert('Erro!', error.message);
                } finally {
                  this.setState({isLoading: false});
                }
              }}
            />
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
  marginFooter: {marginBottom: 10},
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
