import {
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    TextInput,
    SafeAreaView,
    DrawerLayoutAndroid
} from "react-native";
import { styles } from "../style.js";
import { useNavigation } from '@react-navigation/native';
import { Menu, Syringe, ShieldPlus, Stethoscope, Bone } from "lucide-react-native";
import SemConsulta from "../ui/semConsulta.js";
import Consulta from "../ui/consulta.js";
import { useState, useRef } from "react";
import ModalCancelarConsulta from "../ui/modalCancelarConsulta.js";
import Calendario from "../ui/calendario.js";
import DropDown from "../ui/dropdown.js";
import Botao from "../ui/botao.js";
import Global from "../global.js";
import Incorreto from "../ui/incorreto.js";
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import Navbar from "../ui/navbar.js";

export default function Agendar2() {
    const drawer = useRef(null);
    const drawerPosition = 'left';


    const [nome, setNome] = useState()
    const [estado, setEstado] = useState(styles.estado)
    const [mostraErro, setMostraErro] = useState(false)
    const [mostraErro2, setMostraErro2] = useState(false)
    const [racaPet, setRacaPet] = useState()

    const navigation = useNavigation();

    function salvarPet() {
        if (!nome) {
            setMostraErro(true)
            return null
        }else{
            setMostraErro(false)
        }

        if (racaPet == undefined) {
            console.log(racaPet)
            setMostraErro2(true)
            return null
        }else{
            setMostraErro2(false)
        }

        Global.nomePet = nome
        // console.log(Global.idAgendamento)
        try {
            fetch(
                `https://pet-space-api-20231127140924.victorioushill-36c6ab00.brazilsouth.azurecontainerapps.io/api/agendamento/cliente/agendar?nomeAnimal=${nome}&especie=${racaPet}&idAgendamento=${Global.idAgendamento}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${Global.token}`
                    },
                }
            )
                .then((response) => response.json())
                .then((data) => {
                    console.log(data)
                    navigation.replace('inicio')
                });

            // navigation.replace('inicio')
        } catch (error) {
            console.log(error)
        }



    }

    const [fontLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold
    })

    if (!fontLoaded) {
        return null;
    }




    return (
        <DrawerLayoutAndroid
            ref={drawer}
            drawerWidth={300}
            drawerPosition={drawerPosition}
            renderNavigationView={() => <Navbar navigation={navigation} />}>
            <SafeAreaView style={{ flex: 1 }}>
                <View contentContainerStyle={styles.containerHome}>
                    <View style={styles.logo}>
                        <Text style={styles.logo1}>Pet<Text style={styles.logo2}>Space</Text></Text>
                        <Menu color="#000" size={24} onPress={() => drawer.current.openDrawer()}/>
                    </View>

                    <View style={styles.box}>
                        <Text style={styles.labelLogin}>Agendar consulta</Text>

                        <Image style={{ alignSelf: 'center' }} source={require('../assets/agendar.png')} alt={'ondas'} width={500} height={500} />

                        <View>
                            <TextInput
                                onBlur={() => setEstado(nome ? styles.estado : styles.estadoBlur)}
                                style={estado}
                                placeholder={"Digite o nome do seu Pet..."}
                                onChangeText={setNome}
                                value={nome}
                            />
                            {mostraErro ? <Incorreto text={'Insira o nome do seu pet!'} /> : null}
                        </View>

                    <View>
                        <DropDown items={[
                            { label: 'Gato', value: 0 },
                            { label: 'Cachorro', value: 1 },
                            { label: 'Coelho', value: 2 },
                            { label: 'Roedor', value: 3 },
                            { label: 'Aves', value: 4 }
                        ]}
                            value={racaPet}
                            racaPet={setRacaPet}
                        />
                        {mostraErro2 ? <Incorreto text={'Escolha a raça do seu pet!'} /> : null}
                    </View>

                        <Botao estilo={styles.botaoRoxo} estiloTxt={styles.txtBotaoRoxo} funcao={() => salvarPet()} textoBotao={'Agendar consulta'} />
                        <Botao estilo={styles.botaoBranco} estiloTxt={styles.txtBotaoBranco} funcao={() => navigation.replace('agendar')} textoBotao={'Voltar'} />
                    </View>

                    {/* <Image style={styles.waves2} source={require('../assets/wave.png')} alt={'ondas'} width={500} height={500} /> */}

                </View>
            </SafeAreaView>

        </DrawerLayoutAndroid>
    );
}