import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './pages/LoginScreen';
import CadastroPage from './pages/CadastroPage';
import VendaPage from './pages/VendaPage';
import Main from './pages/Main';
const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#153973',
          borderBottomWidth: 1,
          borderBottomColor: '#C5C5C5',
        },
        headerTintColor: '#FFF',
      }}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: 'Login',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 30,
          },
        }}
      />
      <Stack.Screen
        name="Main"
        component={Main}
        options={{
          title: 'VendasApp',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 25,
          },
        }}
      />
      <Stack.Screen
        name="CadastroPage"
        component={CadastroPage}
        options={{
          title: 'Cadastro de Produto',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 25,
          },
        }}
      />
      <Stack.Screen
        name="VendaPage"
        component={VendaPage}
        options={{
          title: 'Carrinho',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 25,
          },
        }}
      />
    </Stack.Navigator>
  );
}
