import React from 'react';
import {View, Button, TextInput, StyleSheet, ScrollView} from 'react-native';
import FormRow from '../components/FormRow';
import {connect} from 'react-redux';
import {setField} from '../actions';

class CadastroPage extends React.Component {
  constructor(props) {
    super(props);
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
              value={cadPro.pro_descricao}
              onChangeText={value => setField('pro_descricao', value)}
            />
          </FormRow>
          <FormRow>
            <TextInput
              style={styles.inputPro}
              placeholder="Valor"
              placeholderTextColor="#91a9cf"
              keyboardType="decimal-pad"
              value={cadPro.pro_valor}
              onChangeText={value => setField('pro_valor', value)}
            />
          </FormRow>
          <FormRow>
            <TextInput
              style={styles.inputPro}
              placeholder="Estoque"
              placeholderTextColor="#91a9cf"
              keyboardType="decimal-pad"
              value={cadPro.pro_estoque}
              onChangeText={value => setField('pro_estoque', value)}
            />
          </FormRow>
          <FormRow>
            <TextInput
              style={styles.inputPro}
              placeholder="Departamento"
              placeholderTextColor="#91a9cf"
              autoCapitalize="words"
              value={cadPro.pro_departamento}
              onChangeText={value => setField('pro_departamento', value)}
            />
          </FormRow>
          <FormRow>
            <TextInput
              style={styles.inputPro}
              placeholder="Unidade"
              placeholderTextColor="#91a9cf"
              autoCapitalize="words"
              value={cadPro.pro_unidade}
              onChangeText={value => setField('pro_unidade', value)}
            />
          </FormRow>
        </View>
        <View style={styles.viewButton}>
          <Button title={'Salvar'} color={'green'} />
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
    fontSize: 24,
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
    marginTop: 10,
    marginHorizontal: 25,
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
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CadastroPage);
