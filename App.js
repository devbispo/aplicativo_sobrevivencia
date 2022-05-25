import React from 'react';
import Login from './assets/Screeens/login';
import Materias from './assets/Screeens/materias';
import Tela_cadastro from './assets/Screeens/tela_cadastro'
import Recuperar_senha from './assets/Screeens/recuperar_senha';
import MateriasDisponiveis from './assets/Screeens/materias_disponiveis';
import Tela_home from './assets/Screeens/tela_home';
import Tela_perfil from './assets/Screeens/tela_perfil';
import Agenda from './assets/Screeens/agenda';

import Menu from './assets/Screeens/menu';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="recuperar_senha" component={Recuperar_senha} />
        <Stack.Screen name="materias" component={Materias} />
        <Stack.Screen name="tela_cadastro" component={Tela_cadastro}/>
        <Stack.Screen name="materias_disponiveis" component={MateriasDisponiveis}/>
        <Stack.Screen name="tela_home" component={Tela_home}/>
        <Stack.Screen name="tela_perfil" component={Tela_perfil}/>
        <Stack.Screen name="menu" component={Menu}/>
        <Stack.Screen name="agenda" component={Agenda}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}