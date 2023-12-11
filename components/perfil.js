import React, { useEffect, useRef, useState } from 'react';
import {
    DrawerLayoutAndroid,
    Text,
    View,
    Button,
    ScrollView,
    Image,
    TextInput,
    TouchableOpacity
} from "react-native";
import Navbar from '../ui/navbar.js';
import { styles } from "../style.js";
import { Menu, Trash2 } from "lucide-react-native";
import Botao from '../ui/botao.js';
import { useNavigation } from '@react-navigation/native';
import ModalCancelarConsulta from '../ui/modalCancelarConsulta.js';
import Global from '../global.js';
import { Alert } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold} from '@expo-google-fonts/poppins';

export default function Perfil() {
    const emailAPI = 'Luizg1717@gmail.com'
    const nomeAPI = 'Luiz Brito'

    const [estado, setEstado] = useState(styles.estado)

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [modalVisible, setModalVisible] = useState(false)

    const drawer = useRef(null);
    const drawerPosition = 'left';

    const navigation = useNavigation();

    useEffect(() => {
        fetch(
            `https://pet-space-api-20231127140924.victorioushill-36c6ab00.brazilsouth.azurecontainerapps.io/api/cliente`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${Global.token}`
                },
            }
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setNome(data.nome)
                setEmail(data.email)
            })
            .catch(error => console.log(error))
    }, [])

    function editarConta() {
        console.log(nome, email)
        fetch(
            `https://pet-space-api-20231127140924.victorioushill-36c6ab00.brazilsouth.azurecontainerapps.io/api/cliente/Perfil?nome=${nome}&email=${email}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${Global.token}`
                },
            }
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                Alert.alert(data.message)
            })
            .catch(error => console.log(error))
    }

    function apagaConta() {
        fetch(
            `https://pet-space-api-20231127140924.victorioushill-36c6ab00.brazilsouth.azurecontainerapps.io/api/cliente`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${Global.token}`
                },
            }
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
            })
            .catch(error => console.log(error))
            navigation.replace('home')
        }

    const [ fontLoaded ] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold
      })
    
      if (!fontLoaded){
        return null;
      }


    return (
        <DrawerLayoutAndroid
            ref={drawer}
            drawerWidth={300}
            drawerPosition={drawerPosition}
            renderNavigationView={() => <Navbar navigation={navigation} />}>


            <ScrollView style={styles.containerPerfil}>
                <View style={styles.logo}>
                    <Text style={styles.logo1}>Pet<Text style={styles.logo2}>Space</Text></Text>
                    <Menu color="#000" size={24} onPress={() => drawer.current.openDrawer()} />
                </View>

                <View style={styles.boxPerfil}>
                    <View style={styles.contentPerfil}>

                        <View style={styles.consultasAbertas}>
                            <Text style={styles.textoPerfil}>Perfil</Text>
                        </View>

                        <Image source={require('../assets/img-perfil.png')} alt={'cachorro'} />


                        <View style={styles.boxInput}>
                            <Text style={{ width: "70%", alignSelf: "center", marginBottom: 5, color: '#424242', fontFamily: 'Poppins_500Medium' }}>Nome</Text>
                            <TextInput
                                onBlur={() => setEstado(nome ? styles.estado : styles.estadoBlur)}
                                style={estado}
                                placeholder={nomeAPI}
                                onChangeText={setNome}
                                value={nome}
                            />
                        </View>

                        <View style={styles.boxInput}>
                            <Text style={{ width: "70%", alignSelf: "center", marginBottom: 5, color: '#424242', fontFamily: 'Poppins_500Medium' }}>E-mail</Text>
                            <TextInput
                                onBlur={() => setEstado(email ? styles.estado : styles.estadoBlur)}
                                style={estado}
                                placeholder={emailAPI}
                                onChangeText={setEmail}
                                value={email}
                                disabled
                            />
                        </View>

                        <View style={styles.boxInput}>
                            <Botao estilo={styles.botaoRoxo} estiloTxt={styles.txtBotaoRoxo} funcao={() => editarConta()} textoBotao={'Editar'} />
                        </View>



                        <TouchableOpacity style={styles.boxApagarConta} onPress={() => setModalVisible(true)}>
                            <Trash2 color='#424242' size={24} />
                            <Text style={{ fontFamily: 'Poppins_400Regular', color: '#424242', top: 2 }}>Apagar conta</Text>
                        </TouchableOpacity>

                        <ModalCancelarConsulta visible={modalVisible} fecharModal={() => setModalVisible(false)} aceito={() => apagaConta()} textModal='Tem certeza que deseja deletar sua conta?' />

                    </View>
                </View>
            </ScrollView>


        </DrawerLayoutAndroid>
    );
}