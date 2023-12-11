import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ImageBackground,
    Image,
    TextInput,
    Modal,
    Alert,
    SafeAreaView,
    ScrollView
} from "react-native";
import { styles } from "../style.js";
import { useNavigation } from '@react-navigation/native';
import Botao from "../ui/botao.js";
import { useEffect, useState } from "react";
const sucesso = require('../assets/sucesso.png')
const fracasso = require('../assets/fracasso.png')
import { Eye } from "lucide-react-native";
import Requisitos from "../ui/requisitos.js";
import Incorreto from "../ui/incorreto.js";
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import Global from "../global.js";
import { verificarSenha } from "../validacoes.js";
import { BadgeCheck, BadgeX, BadgeInfo } from "lucide-react-native";

export default function RecuperarSenha() {
    const [token, setToken] = useState('')
    const [senha, setSenha] = useState()
    const [senha2, setSenha2] = useState()
    const [estado, setEstado] = useState(styles.estado)
    const [estado2, setEstado2] = useState(styles.estado)
    const [estado3, setEstado3] = useState(styles.estado)
    const [mostraSenha, setMostraSenha] = useState(true)
    const [mostraSenha2, setMostraSenha2] = useState(true)
    const [mostraErro, setMostraErro] = useState(false)
    const [mostraErro2, setMostraErro2] = useState(false)
    const [cor1, setCor1] = useState("#ef4a3c")
    const [cor2, setCor2] = useState("#ef4a3c")
    const [cor3, setCor3] = useState("#ef4a3c")
    const [cor4, setCor4] = useState("#ef4a3c")
    const [icone1, setIcone1] = useState(<BadgeX color= { "#ef4a3c" } size={16} />)
    const [icone2, setIcone2] = useState(<BadgeX color= { "#ef4a3c" } size={16} />)
    const [icone3, setIcone3] = useState(<BadgeX color= { "#ef4a3c" } size={16} />)
    const [icone4, setIcone4] = useState(<BadgeX color= { "#ef4a3c" } size={16} />)


    const navigation = useNavigation();

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
        trocaCorRequisitos(senha, senha2);
    }, [senha, senha2]);


    function EnviarSenha() {
        // funçao de envio de email

        if (!token || token != Global.token) {
            setMostraErro2(true)
            setEstado(styles.estadoBlur)
        } else if (senha != senha2 || !senha || !senha2 || !verificarSenha(senha)) {
            setMostraErro2(false)
            setEstado(styles.estado)
            setMostraErro(true)
            setEstado2(styles.estadoBlur)
            setEstado3(styles.estadoBlur)
        } else {
            fetch(
                `https://pet-space-api-20231127140924.victorioushill-36c6ab00.brazilsouth.azurecontainerapps.io/api/cliente/Senha?senha=${senha}&email=${Global.email}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )
                .then((response) => response.json())
                .then((data) => {
                    console.log(data)

                    if (data.message == "Senha editada com sucesso") {
                        navigation.replace('login')
                    } else {
                        setMostraErro(true)
                        setEstado2(styles.estadoBlur)
                        setEstado3(styles.estadoBlur)
                    }
                })
                .catch(error => console.log(error))
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }} onRequestClose={() => navigation.replace('home')}>
            <ScrollView contentContainerStyle={styles.containerScroll}>
                <Image style={styles.waves} source={require('../assets/wave-1.png')} alt={'ondas'} width={500} height={500} />

                <Text style={styles.labelLogin}>Recupere sua senha</Text>

                <Image source={require('../assets/esqueciSenha.png')} alt={'esqueci minha senha'} width={500} height={500} />

                <View style={styles.box}>
                    {/* TOKEN */}
                    <View>
                        <Text style={{ width: "70%", alignSelf: "center", marginBottom: 4, color: '#424242', fontFamily: 'Poppins_500Medium' }}>Código</Text>
                        <TextInput
                            onBlur={() => setEstado(token ? styles.estado : styles.estadoBlur)}
                            style={estado}
                            placeholder={"Digite o código"}
                            onChangeText={setToken}
                            value={token}
                        />
                        {mostraErro2 ? <Incorreto text={'Código invalido'} /> : null}
                    </View>
                    {/* SENHA */}
                    <View style={{ position: "relative" }}>
                        <Text style={{ width: "70%", alignSelf: "center", marginBottom: 4, color: '#424242', fontFamily: 'Poppins_500Medium' }}>Senha</Text>

                        <TextInput
                            onBlur={() => setEstado2(senha ? styles.estado : styles.estadoBlur)}
                            style={estado2}
                            placeholder={"Nova senha..."}
                            onChangeText={setSenha}
                            value={senha}
                            secureTextEntry={mostraSenha}
                        />

                        <TouchableOpacity onPress={() => setMostraSenha(!mostraSenha)} style={styles.olhoSenha}>
                            <Eye color="gray" size={22} hitSlop={{ top: 24, bottom: 24, left: 50, right: 50 }} style={{ top: 5 }} />
                        </TouchableOpacity>
                    </View>
                    {/* CONFIRMAR SENHA */}
                    <View style={{ position: "relative" }}>
                        <Text style={{ width: "70%", alignSelf: "center", marginBottom: 4, color: '#424242', fontFamily: 'Poppins_500Medium' }}>Recuperar senha</Text>

                        <TextInput
                            onBlur={() => setEstado3(senha ? styles.estado : styles.estadoBlur)}
                            style={estado3}
                            placeholder={"Confirme a senha..."}
                            onChangeText={setSenha2}
                            value={senha2}
                            secureTextEntry={mostraSenha2}
                        />
                        {mostraErro ? <Incorreto text={'Senhas não coincidem'} /> : null}

                        <TouchableOpacity onPress={() => setMostraSenha2(!mostraSenha2)} style={styles.olhoSenha}>
                            <Eye color="gray" size={22} hitSlop={{ top: 24, bottom: 24, left: 50, right: 50 }} style={{ top: 5 }} />
                        </TouchableOpacity>
                    </View>

                    <Requisitos color1 = {cor1} color2 = {cor2} color3 = {cor3} color4 = {cor4} icon1 = {icone1} icon2 = {icone2} icon3 = {icone3} icon4 = {icone4}/>

                    <Botao estilo={styles.botaoRoxo} estiloTxt={styles.txtBotaoRoxo} funcao={() => EnviarSenha()} textoBotao={'Enviar'} />

                    <TouchableOpacity style={{ width: '70%', alignSelf: "center" }} onPress={() => navigation.replace('login')}>
                        <Text style={{ textAlign: 'center', fontSize: 15, color: '#424242', fontFamily: 'Poppins_400Regular' }}>Voltar</Text>
                    </TouchableOpacity>
                </View>

                <Image style={styles.waves2} source={require('../assets/wave.png')} alt={'ondas'} width={500} height={500} />
            </ScrollView>
        </SafeAreaView>
    );
}