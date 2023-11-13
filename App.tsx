// In App.js in a new project

import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import InputScreen from './src/screens/input-screen/InputScreen';
import DisplayScreen from './src/screens/input-screen/DisplayScreen';

import ValidarCpf from './src/screens/validar-cpf/ValidarCpf'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="validarCpf">
        <Stack.Screen name="validarCpf" component={ValidarCpf} />
        <Stack.Screen name="DisplayScreen" component={DisplayScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;