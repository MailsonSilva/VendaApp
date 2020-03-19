import React from 'react';
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  ScrollView,
  Picker,
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
              placeholder="Descrição"
              placeholderTextColor="#91a9cf"
              autoCapitalize="words"
              onChangeText={value => setField('pro_descricao', value)}
              value={cadPro.pro_descricao}
            />
          </FormRow>
          <FormRow>
            <TextInput
              style={styles.inputPro}
              placeholder="Valor"
              placeholderTextColor="#91a9cf"
              keyboardType="decimal-pad"
              onChangeText={value => setField('pro_valor', value)}
              value={cadPro.pro_valor}
            />
          </FormRow>
          <FormRow>
            <TextInput
              style={styles.inputPro}
              placeholder="Estoque"
              placeholderTextColor="#91a9cf"
              keyboardType="decimal-pad"
              onChangeText={value => {
                setField('pro_estoque', value);
              }}
              value={cadPro.pro_estoque}
            />
          </FormRow>
          <FormRow>
            <View style={styles.inputPicker}>
              <Picker
                style={styles.picker}
                selectedValue={cadPro.pro_departamento}
                onValueChange={itemValue =>
                  setField('pro_departamento', itemValue)
                }>
                <Picker.Item label="Alimentos" value="Alimentos" />
                <Picker.Item label="Higiene" value="Higiene" />
                <Picker.Item label="Frios" value="Frios" />
                <Picker.Item label="Papelaria" value="Papelaria" />
                <Picker.Item label="Bomboniere" value="Bomboniere" />
              </Picker>
            </View>
          </FormRow>
          <FormRow>
            <View style={styles.inputPicker}>
              <Picker
                style={styles.picker}
                selectedValue={cadPro.pro_unidade}
                onValueChange={itemValue => setField('pro_unidade', itemValue)}>
                <Picker.Item label="KG" value="KG" />
                <Picker.Item label="UN" value="UN" />
                <Picker.Item label="GR" value="GR" />
                <Picker.Item label="ML" value="LT" />
                <Picker.Item label="CX" value="CX" />
              </Picker>
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
  inputPicker: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 10,
    borderRadius: 10,
    borderColor: '#FFF',
    borderWidth: 1,
    backgroundColor: '#113063',
  },
  picker: {
    fontSize: 20,
    width: '100%',
    color: '#FFF',
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
