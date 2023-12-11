import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ImageBackground,
    Image,
    TextInput,
    Modal,
    Alert
} from "react-native";
import { styles } from "../style.js";
import { useNavigation } from '@react-navigation/native';
import Botao from "../ui/botao.js";
import { useState } from "react";
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold} from '@expo-google-fonts/poppins';
const sucesso = require('../assets/sucesso.png')
const fracasso = require('../assets/fracasso.png')


export default function ModalUi(props) {

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
        <Modal
            animationType="fade"
            transparent={true}
            visible={props.visible}
            >
            <View style={styles.fundoModal}>
                <View style={styles.modal}>
                    <Image style={{ alignSelf: 'center' }} source={props.image} alt="" width={1000} height={1000} />
                    <Text style={styles.labelModal}>{props.label}</Text>
                    <Text style={styles.txtModal}>{props.text}</Text>

                    <Botao estilo={props.estiloBotao} estiloTxt={props.estiloText} funcao={props.funcao} textoBotao={props.textoBotao} />
                </View>
            </View>
        </Modal>
    )
}

// <Modal
//     image={sucesso}
//     label={'teste modal'}
//     text={'texto modal teste...'}
//     estiloBotao={styles.botaoVerde}
//     estiloText={styles.txtBotaoVerde}
//     funcao={setModalVisible(false)}
//     textoBotao={'Lobinhooo'}
//     visible={false}
// />