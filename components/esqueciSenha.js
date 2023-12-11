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
import { useState } from "react";
const sucesso = require('../assets/sucesso.png')
const fracasso = require('../assets/fracasso.png')
import ModalUi from "../ui/modal.js";
import { validaEmail } from "../validacoes.js";
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import Global from "../global.js";

export default function EsqueciSenha() {
    const [email, setEmail] = useState('')
    const [estado, setEstado] = useState(styles.estado)
    const [modalVisible, setModalVisible] = useState(false)
    const [emailEnviado, setEmailEnviado] = useState()

    const navigation = useNavigation();

    const [fontLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold
    })

    if (!fontLoaded) {
        return null;
    }

    async function enviarToken() {
        Global.email = email
        // gerar token
        const token = Math.floor(Math.random() * 10) + ''
            + Math.floor(Math.random() * 10) + ''
            + Math.floor(Math.random() * 10) + ''
            + Math.floor(Math.random() * 10)
        Global.token = token

        fetch(
            "https://email-api-opal.vercel.app/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "email": "petSpace",
                    "toEmail": email,
                    "subject": "REDEFINIR SENHA",
                    "text": "Seu codigo de verificação: "+ token
                })
            }
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
            })
            .catch(error => console.log(error))
    }

    function EnviarEmail() {
        console.log(email)
        // funçao de envio de email
        if (email && validaEmail(email)) {
            setEmailEnviado(true)
            setModalVisible(true)
            enviarToken()
        } else {
            setEmailEnviado(false)
            setModalVisible(true)
            setEstado(styles.estadoBlur)
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.containerScroll}>
                <Image style={styles.waves} source={require('../assets/wave-1.png')} alt={'ondas'} width={500} height={500} />

                <Text style={styles.labelLogin}>Recupere sua senha</Text>

                <Image source={require('../assets/esqueciSenha.png')} alt={'esqueci minha senha'} width={500} height={500} />

                <View style={styles.box}>

                    <View>
                        <Text style={{ width: "70%", alignSelf: "center", marginBottom: 4, fontFamily: 'Poppins_500Medium', color: '#424242' }}>E-mail</Text>
                        <TextInput
                            onBlur={() => setEstado(email ? styles.estado : styles.estadoBlur)}
                            style={estado}
                            placeholder={"Digite seu email..."}
                            onChangeText={setEmail}
                            value={email}
                        />
                    </View>

                    <Botao estilo={styles.botaoRoxo} estiloTxt={styles.txtBotaoRoxo} funcao={() => EnviarEmail()} textoBotao={'Enviar'} />

                    <TouchableOpacity style={{ width: '70%', alignSelf: "center" }} onPress={() => navigation.replace('login')}>
                        <Text style={{ textAlign: 'center', fontSize: 15, color: '#424242', fontFamily: 'Poppins_400Regular' }}>Voltar</Text>
                    </TouchableOpacity>
                </View>

                <ModalUi
                    image={emailEnviado ? sucesso : fracasso}
                    label={emailEnviado ? 'E-mail enviado com sucesso!' : 'E-mail não foi enviado!'}
                    text={emailEnviado ? 'Enviamos um código para prosseguir com a recuperação da senha... ' : 'Ocorreu algum erro tente novamente...'}
                    estiloBotao={emailEnviado ? styles.botaoVerde : styles.botaoVermelho}
                    estiloText={emailEnviado ? styles.txtBotaoVerde : styles.txtBotaoVermelho}
                    funcao={emailEnviado ? () => navigation.replace('recuperarSenha') : () => setModalVisible(false)}
                    textoBotao={emailEnviado ? 'Continuar' : 'Tentar novamente!'}
                    visible={modalVisible}
                />

                <Image style={styles.waves2} source={require('../assets/wave.png')} alt={'ondas'} width={500} height={500} />
            </ScrollView>
        </SafeAreaView>
    );
}