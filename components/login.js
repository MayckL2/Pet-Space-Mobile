import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  SafeAreaView,
  TextInput,
  Alert,
  ScrollView
} from "react-native";
import { styles } from "../style.js";
import { useNavigation } from '@react-navigation/native';
import Botao from "../ui/botao.js";
import { useState } from "react";
import Logar from "../api/login.js";
import  { verificarSenha, validaEmail } from "../validacoes.js";
import Incorreto from "../ui/incorreto.js";
import { Eye } from "lucide-react-native";
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold} from '@expo-google-fonts/poppins';

export default function Cadastro() {
  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()
  const [estado, setEstado] = useState(styles.estado)
  const [estado2, setEstado2] = useState(styles.estado)
  const [mostraSenha, setMostraSenha] = useState(true)
  const [mostraErro, setMostraErro] = useState(false)

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

  async function logar() {
    if (email && senha) {
      if(validaEmail(email) && verificarSenha(senha)){
        if(await Logar(email, senha)){
          navigation.replace('inicio')
        }else{
          Alert.alert('Usuario ou senha invalidos...')
        }
        setMostraErro(false)
      }else{
        msgError = 'Usuário ou senha incorretos';
        setMostraErro(true)
        setEstado(styles.estadoBlur)
        setEstado2(styles.estadoBlur)}
    } else {
      setMostraErro(true)
      if(!email) setEstado(styles.estadoBlur)
      if(!senha) setEstado2(styles.estadoBlur)
      msgError = 'Campos vázios...';
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.containerScroll}>
        <Image style={styles.waves} source={require('../assets/wave-1.png')} alt={'ondas'} width={500} height={500} />

        <Text style={styles.labelLogin}>Faça login no <Text style={styles.petspace}>PetSpace!</Text></Text>

        <Image source={require('../assets/login.png')} alt={'ondas'} width={500} height={500} />

        <View style={styles.box}>
          <View>
            <Text style={{ width: "70%", alignSelf: "center", marginBottom: 4, color: '#424242', fontFamily: 'Poppins_500Medium', }}>E-mail</Text>
            <TextInput
              onBlur={() => setEstado(email ? styles.estado : styles.estadoBlur)}
              style={estado}
              placeholder={"Digite seu e-mail..."}
              onChangeText={setEmail}
              value={email}
            />
          </View>

          <View style={{ position: "relative" }}>
            <View style={{ flexDirection: 'row', width: "70%", justifyContent: "space-between", alignSelf: "center", marginBottom: 5 }}>
              <Text style={{ alignSelf: "center", marginBottom: 4, color: '#424242', fontFamily: 'Poppins_500Medium', }}>Senha</Text>
              <TouchableOpacity onPress={() => navigation.replace('esqueciSenha')}><Text style={{ alignSelf: "center", marginBottom: 4, color: '#424242', fontFamily: 'Poppins_500Medium', }}>Esqueceu?</Text></TouchableOpacity>
            </View>

            
            <TextInput
              onBlur={() => setEstado2(senha ? styles.estado : styles.estadoBlur)}
              style={estado2}
              placeholder={"Digite sua senha..."}
              onChangeText={setSenha}
              value={senha}
              secureTextEntry={mostraSenha}
            />
            {mostraErro ? <Incorreto text={msgError}/> : null}

            <TouchableOpacity onPress={() => setMostraSenha(!mostraSenha)} style={styles.olhoSenhaLogin}>
              <Eye color="gray" size={22} hitSlop={{ top: 24, bottom: 24, left: 50, right: 50 }} style={{ top: 9 }} />
            </TouchableOpacity>
          </View>

          <Botao estilo={styles.botaoRoxo} estiloTxt={styles.txtBotaoRoxo} funcao={()=> logar()} textoBotao={'Login'} />
          
          {/* <Botao estilo={styles.botaoRoxo} estiloTxt={styles.txtBotaoRoxo} funcao={() => navigation.replace('home')} textoBotao={'voltar'} /> */}
        </View>

        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <Text style={{ fontFamily: 'Poppins_400Regular' }}>Novo usuário? </Text>
          <TouchableOpacity onPress={() => navigation.replace('cadastro')}>
            <Text style={styles.petspace}>Crie sua conta!</Text>
          </TouchableOpacity>
        </View>

        <Image style={styles.waves2} source={require('../assets/wave.png')} alt={'ondas'} width={500} height={500} />
      </ScrollView>
    </SafeAreaView>
  );
}