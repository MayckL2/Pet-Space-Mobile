import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
  TextInput,
  Alert
} from "react-native";
import { styles } from "../style.js";
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from "react";
import Requisitos from './../ui/requisitos';
import Botao from "../ui/botao.js";
import { Eye } from "lucide-react-native";
import Incorreto from "../ui/incorreto.js";
import { validaEmail, verificarSenha } from "../validacoes.js";
import { cadastro } from "../api/cadastro.js";
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { BadgeCheck, BadgeX, BadgeInfo } from "lucide-react-native";

export default function Cadastro() {

  const navigation = useNavigation();

  const [email, onChangeEmail] = useState()
  const [nome, onChangeNome] = useState()
  const [senha, onChangeSenha] = useState()
  const [confirmaSenha, onChangeConfirmaSenha] = useState()
  const [estado, setEstado] = useState(styles.estado)
  const [estado2, setEstado2] = useState(styles.estado)
  const [estado3, setEstado3] = useState(styles.estado)
  const [estado4, setEstado4] = useState(styles.estado)
  const [mostraSenha, setMostraSenha] = useState(true)
  const [mostraConfirmaSenha, setMostraConfirmaSenha] = useState(true)
  const [cor1, setCor1] = useState("#ef4a3c")
  const [cor2, setCor2] = useState("#ef4a3c")
  const [cor3, setCor3] = useState("#ef4a3c")
  const [cor4, setCor4] = useState("#ef4a3c")
  const [icone1, setIcone1] = useState(<BadgeX color= { "#ef4a3c" } size={16} />)
  const [icone2, setIcone2] = useState(<BadgeX color= { "#ef4a3c" } size={16} />)
  const [icone3, setIcone3] = useState(<BadgeX color= { "#ef4a3c" } size={16} />)
  const [icone4, setIcone4] = useState(<BadgeX color= { "#ef4a3c" } size={16} />)

  function trocaCorRequisitos(senha, confSenha) {

    setCor1("#ef4a3c");
    setIcone1( <BadgeX color= { "#ef4a3c" } size={16} />);

    if (senha) {

      const mai = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

      const min = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

      var maiuscula = false;

      var minuscula = false;

      const tamanho = senha.length > 8;

      for (var i = 0; i < mai.length; i++) {
        if (senha.includes(mai[i])) {
          maiuscula = true;
        }
        if (senha.includes(min[i])) {
          minuscula = true;
        }
      }

      (maiuscula) ? setCor1("#08c046") : setCor1("#ef4a3c");
      (minuscula) ? setCor2("#08c046") : setCor2("#ef4a3c");
      (tamanho) ? setCor3("#08c046") : setCor3("#ef4a3c");
      (senha == confSenha) ? setCor4("#08c046") : setCor4("#ef4a3c");

      (maiuscula) ? setIcone1(<BadgeCheck color= { "#08c046" } size={16} />) : setIcone1( <BadgeX color= { "#ef4a3c" } size={16} />);
      (minuscula) ? setIcone2(<BadgeCheck color= { "#08c046" } size={16} />) : setIcone2( <BadgeX color= { "#ef4a3c" } size={16} />);
      (tamanho) ? setIcone3(<BadgeCheck color= { "#08c046" } size={16} />) : setIcone3( <BadgeX color= { "#ef4a3c" } size={16} />);
      (senha == confSenha) ? setIcone4(<BadgeCheck color= { "#08c046" } size={16} />) : setIcone4( <BadgeX color= { "#ef4a3c" } size={16} />);
      
    } else {
      setCor1("#ef4a3c");
      setCor2("#ef4a3c");
      setCor3("#ef4a3c");
    }



  }

  useEffect(() => {
      trocaCorRequisitos(senha, confirmaSenha);
  }, [senha, confirmaSenha]);
  const [mostraErro, setMostraErro] = useState(false)
  const [mostraErro2, setMostraErro2] = useState(false)
  const [mostraErro3, setMostraErro3] = useState(false)

  const [fontLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  })

  if (!fontLoaded) {
    return null;
  }

  const cadastrar = () => {
    if (!email || !validaEmail(email)) {
      setMostraErro(true)
      setEstado(styles.estadoBlur)
      return null
    } else {
      setMostraErro(false)
      setEstado(styles.estado)
    }

    if (!nome) {
      setMostraErro2(true)
      setEstado2(styles.estadoBlur)
      return null
    } else {
      setMostraErro2(false)
      setEstado2(styles.estado)
    }

    if (!senha || !confirmaSenha && !verificarSenha(senha)) {
      setMostraErro3(true)
      setEstado3(styles.estadoBlur)
      setEstado4(styles.estadoBlur)
      return null
    } else {
      if (senha != confirmaSenha || !verificarSenha(senha)) {
        setMostraErro3(true)
        setEstado3(styles.estadoBlur)
        setEstado4(styles.estadoBlur)
        return null
      } else {
        setMostraErro3(false)
        setEstado3(styles.estado)
        setEstado4(styles.estado)
        cadastro(email, nome, senha);
        navigation.replace('login');
      }
    }

  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.waves} source={require('../assets/wave-1.png')} alt={'ondas'} width={500} height={500} />


        <Text style={styles.tituloCadastro}>Cadastre-se no <Text style={styles.petspace}>PetSpace</Text></Text>
        <Image source={require('../assets/cadastro.png')} alt={'cachorro foguete'} width={500} height={500} />

        <View style={styles.input}>
          <Text style={styles.labelCadastro}>E-mail</Text>
          <TextInput
            onBlur={() => setEstado(email ? styles.estado : styles.estadoBlur)}
            style={estado}
            onChangeText={onChangeEmail}
            placeholder={"Digite seu email..."}
            value={email}
          />
          {/* <Incorreto text={email}/> */}
          {mostraErro ? <Incorreto text={'Email incorreto!'} /> : null}
        </View>

        <View style={styles.input}>
          <Text style={styles.labelCadastro}>Nome</Text>
          <TextInput
            onBlur={() => setEstado2(nome ? styles.estado : styles.estadoBlur)}
            style={estado2}
            onChangeText={onChangeNome}
            placeholder={"Digite seu nome..."}
            value={nome}
          />
          {mostraErro2 ? <Incorreto text={'Insira um nome!'} /> : null}
        </View>

        <View style={styles.inputSenha}>
          <Text style={styles.labelCadastro}>Senha</Text>
          <TextInput
            onBlur={() => setEstado3(senha ? styles.estado : styles.estadoBlur)}
            style={estado3}
            onChangeText={onChangeSenha}
            value={senha}
            placeholder={"Digite sua senha..."}
            secureTextEntry={mostraSenha}
          />
          <TouchableOpacity onPress={() => setMostraSenha(!mostraSenha)} style={styles.olhoSenhaCad}>
            <Eye color="gray" size={22} hitSlop={{ top: 24, bottom: 24, left: 50, right: 50 }} style={{ top: 5 }} />
          </TouchableOpacity>
        </View>

        <View style={styles.inputSenha}>
          <Text style={styles.labelCadastro}>Confirmar senha</Text>
          <TextInput
            onBlur={() => setEstado4(confirmaSenha ? styles.estado : styles.estadoBlur)}
            style={estado4}
            onChangeText={onChangeConfirmaSenha}
            value={confirmaSenha}
            placeholder={"Confirme a senha..."}
            secureTextEntry={mostraConfirmaSenha}
          />
          <TouchableOpacity onPress={() => setMostraConfirmaSenha(!mostraConfirmaSenha)} style={styles.olhoSenhaCad}>
            <Eye color="gray" size={22} hitSlop={{ top: 24, bottom: 24, left: 50, right: 50 }} style={{ top: 5 }} />
          </TouchableOpacity>
          {mostraErro3 ? <Incorreto text={'Senha Incorretas ou não coincidem!'} /> : null}
        </View>

        <View style={styles.requisitosSenha}>
        <Requisitos color1 = {cor1} color2 = {cor2} color3 = {cor3} color4 = {cor4} icon1 = {icone1} icon2 = {icone2} icon3 = {icone3} icon4 = {icone4}/>
        </View>

        <View style={styles.botaoCadastro}>
          <Botao estilo={styles.botaoRoxo} estiloTxt={styles.txtBotaoRoxo} textoBotao={'Cadastre-se'} link={'login'} funcao={() => cadastrar()} />
        </View>

        <View style={{ flexDirection: 'row', marginTop: 20, marginBottom: 132 }}>
          <Text style={styles.conta}>Já tem conta? </Text>
          <TouchableOpacity onPress={() => navigation.replace('login')}>
            <Text style={styles.linkLogin}>Faça login!</Text>
          </TouchableOpacity>
        </View>

        <Image style={styles.waves2} source={require('../assets/wave.png')} alt={'ondas'} width={500} height={500} />
      </View>
    </ScrollView>
  );
}