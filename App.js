import React from 'react';
import Login from './assets/Screeens/login';
import Lista from './assets/Screeens/lista';
import Cadastro from './assets/Screeens/cadastro';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="cadastro" component={Cadastro} />
        <Stack.Screen name="lista" component={Lista} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
