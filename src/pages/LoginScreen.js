import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ActivityIndicator,
} from 'react-native';
import firebase from 'firebase';
import 'firebase/auth';
import {connect} from 'react-redux';
import {tryLogin} from '../actions';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mail: '',
      password: '',
      isLoading: false,
      message: '',
    };
  }

  componentDidMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyAxHmbPekPyiV7jL8iIECAwe1AkAv9RQT8',
      authDomain: 'vendaapp-6a20a.firebaseapp.com',
      databaseURL: 'https://vendaapp-6a20a.firebaseio.com',
      projectId: 'vendaapp-6a20a',
      storageBucket: 'vendaapp-6a20a.appspot.com',
      messagingSenderId: '921032116847',
      appId: '1:921032116847:web:da561d02d3483378791b9a',
      measurementId: 'G-WPXSFSM51S',
    };
    // Initialize Firebase
    !firebase.apps.length
      ? firebase.initializeApp(firebaseConfig)
      : firebase.app();
  }

  onChangeHandler(fiels, value) {
    this.setState({
      [fiels]: value,
    });
  }

  tryLogin() {
    this.setState({isLoading: true, message: ''});
    const {mail: email, password} = this.state;

    this.props
      .tryLogin({email, password})
      .then(user => {
        if (user) {
          this.props.navigation.replace('Main');
        }
        this.setState({
          isLoading: false,
          message: '',
        });
      })
      .catch(error => {
        this.setState({
          isLoading: false,
          message: this.getMessageByErroCode(error.code),
        });
      });
  }

  getMessageByErroCode(erroCode) {
    switch (erroCode) {
      case 'auth/wrong-password':
        return 'Senha incorreta';
      case 'auth/user-not-found':
        return 'Usuário não encontrado';
      default:
        return 'Erro desconhecido';
    }
  }

  renderMensage() {
    const {message} = this.state;
    if (!message) {
      return null;
    }

    return (
      <View>
        <Text>{message}</Text>
      </View>
    );
  }

  renderButon() {
    if (this.state.isLoading) {
      return <ActivityIndicator size="large" color="#414bcc" />;
    }
    return (
      <Button
        title="Entrar"
        color={'#153973'}
        onPress={() => this.tryLogin()}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="e-mail"
          value={this.state.mail}
          onChangeText={value => this.onChangeHandler('mail', value)}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor="#153973"
        />

        <TextInput
          style={styles.input}
          placeholder="******"
          secureTextEntry
          value={this.state.password}
          onChangeText={value => this.onChangeHandler('password', value)}
          placeholderTextColor="#153973"
        />
        <View style={styles.botton}>{this.renderButon()}</View>
        {this.renderMensage()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: 'center',
    marginBottom: 50,
  },
  input: {
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 20,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#153973',
    borderRadius: 15,
  },
  botton: {
    marginTop: 10,
    marginBottom: 10,
  },
});

export default connect(
  null,
  {tryLogin},
)(LoginScreen);
