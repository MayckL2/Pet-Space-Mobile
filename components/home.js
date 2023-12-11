import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput
} from "react-native";
import { styles } from "../style.js";
import { useNavigation } from '@react-navigation/native';
import Botao from "../ui/botao.js";
import { useState, useEffect } from "react";
import DropDown from "../ui/dropdown.js";
import api from "../api/rotas.js";
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold} from '@expo-google-fonts/poppins';

export default function Home() {

  const navigation = useNavigation();

  const [ fontLoaded ] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  })

  if (!fontLoaded){
    return null;
  }

  // useEffect(() => {

  //   fetch(api + "agendamento/pesquisar",
  //     {
  //       method: "POST",
  //       headers: {
  //         "content-type": "application/json"
  //       }
  //     })
  //     .then(response => {
  //       console.log(response.json())
  //       response.json()
  //     })
  //     .then(data => console.log(data))
  //     .catch(err => console.log(err))
  // }, [])

  return (
    <View style={styles.container}>
      <Image style={styles.waves} source={require('../assets/wave-1.png')} alt={'ondas'} width={500} height={500} />

      <Text style={styles.labelHome}>Seja bem-vindo ao <Text style={styles.petspace}>PetSpace!</Text></Text>

      <Image source={require('../assets/first-page-dog.png')} alt={'ondas'} width={500} height={500} />

      <Botao estilo={styles.botaoRoxo} estiloTxt={styles.txtBotaoRoxo} funcao={()=> navigation.replace('cadastro')} textoBotao={'Criar Conta'} />
      <Botao estilo={styles.botaoBranco} estiloTxt={styles.txtBotaoBranco} funcao={()=> navigation.replace('login')} textoBotao={'Login'} />

      <Image style={styles.waves2} source={require('../assets/wave.png')} alt={'ondas'} width={500} height={500} />
    </View>
  );
}