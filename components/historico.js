import {
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    DrawerLayoutAndroid,
    Alert
} from "react-native";
import { styles } from "../style.js";
import { useNavigation } from '@react-navigation/native';
import { Menu, Syringe, ShieldPlus, Stethoscope, Bone, AlarmCheck } from "lucide-react-native";
import SemConsulta from "../ui/semConsulta.js";
import Consulta from "../ui/consulta.js";
import { useState, useRef, useEffect } from "react";
import ModalCancelarConsulta from "../ui/modalCancelarConsulta.js";
import Navbar from "../ui/navbar.js";
import Global from "../global.js";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { RadioButton } from 'react-native-paper';

export default function Historico() {
    const [data, setData] = useState(<Text>Nenhuma consulta no historico...</Text>)
    const [checked, setChecked] = useState('em andamento');

    const navigation = useNavigation();

    const drawer = useRef(null);
    const drawerPosition = 'left';

    useEffect(() => {
        fetch(
            `https://pet-space-api-20231127140924.victorioushill-36c6ab00.brazilsouth.azurecontainerapps.io/api/agendamento/cliente/listar`,
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

                const dados = data.map((c, i) => {
                    const status = checked == 'em andamento' ? 1 : checked == 'concluido' ? 2 : 3
                    if (status == c.status) {
                        return <Consulta key={i} nomeDoutor={'Dr. Djalma'} data={c.data} horario={c.horario} cor={"#7BEB78"} status={checked} estiloBotao={styles.cancelar} disabled={true} textoBotao={"Cancelar"} funcao={() => null} />
                    }
                })
                setData(dados)
            });
    }, [checked]);

    const [fontLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold
    })

    // if (!fontLoaded) {
    //     return null;
    // }


    useEffect(() => {
        console.log(checked)
    }, [checked])

    return (

        <DrawerLayoutAndroid
            ref={drawer}
            drawerWidth={300}
            drawerPosition={drawerPosition}
            renderNavigationView={() => <Navbar navigation={navigation} />}>

            <ScrollView contentContainerStyle={{ minHeight: '100%' }}>
                <View style={styles.containerHome}>
                    <View style={styles.logo}>
                        <Text style={styles.logo1}>Pet<Text style={styles.logo2}>Space</Text></Text>
                        <Menu color="#000" size={24} onPress={() => drawer.current.openDrawer()} />
                    </View>

                    <View style={styles.box}>

                        <Text style={{ fontFamily: 'Poppins_700Bold', width: '100%', textAlign: 'center', marginVertical: 20, fontSize: 20, color: '#424242' }}>Historico de consultas</Text>

                        <View>

                            <View style={{ flexDirection: 'row', alignContent: 'center', marginLeft: 20, marginBottom: 10 }}>
                                <RadioButton
                                    value="em andamento"
                                    status={checked === 'em andamento' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('em andamento')}
                                />
                                <Text style={{ fontFamily: 'Poppins_700Bold', color: '#424242', marginTop: 7 }}>Em andamento</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignContent: 'center', marginLeft: 20, marginBottom: 10 }}>
                                <RadioButton
                                    value="concluido"
                                    status={checked === 'concluido' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('concluido')}
                                />
                                <Text style={{ fontFamily: 'Poppins_700Bold', color: '#424242', marginTop: 7 }}>Concluido</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignContent: 'center', marginLeft: 20, marginBottom: 10 }}>
                                <RadioButton
                                    value="cancelado"
                                    status={checked === 'cancelado' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('cancelado')}
                                />
                                <Text style={{ fontFamily: 'Poppins_700Bold', color: '#424242', marginTop: 7 }}>Cancelado</Text>
                            </View>
                        </View>

                        {data}
                    </View>

                    <Image style={styles.waves2} source={require('../assets/wave.png')} alt={'ondas'} width={500} height={500} />

                </View>
            </ScrollView>

        </DrawerLayoutAndroid>
    );
}