import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/home';
import Cadastro from './components/cadastro';
import Login from './components/login';
import EsqueciSenha from './components/esqueciSenha';
import RecuperarSenha from './components/recuperarSenha';
import Agendar from './components/agendar';
import Inicio from './components/inicio';
import Perfil from './components/perfil';

import Agendar2 from './components/agendar2';
import Historico from './components/historico';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="cadastro"
          component={Cadastro}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="esqueciSenha"
          component={EsqueciSenha}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="recuperarSenha"
          component={RecuperarSenha}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="agendar"
          component={Agendar}
          options={{ headerShown: false }}
        />
        <Stack.Screen          
          name="inicio"
          component={Inicio}
          options={{ headerShown: false }}
        />
        <Stack.Screen          
          name="agendar2"
          component={Agendar2}
          options={{ headerShown: false }}
        />
        <Stack.Screen          
          name="perfil"
          component={Perfil}
          options={{ headerShown: false }}
        />
        <Stack.Screen          
          name="historico"
          component={Historico}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}