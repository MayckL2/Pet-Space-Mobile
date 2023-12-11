import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ImageBackground,
    Image,
  } from "react-native";
import { styles } from "../style.js";
import { BadgeCheck, BadgeX, BadgeInfo } from "lucide-react-native";


  export default function Requisitos(props) {

    const styles2 = StyleSheet.create({
        label1 : {
            fontSize: 12,
            color : props.color1,
            fontFamily: 'Poppins_400Regular',
            top: 1
        },
        label2 : {
            fontSize: 12,
            color : props.color2,
            fontFamily: 'Poppins_400Regular',
            top: 1
        },
        label3 : {
            fontSize: 12,
            color : props.color3,
            fontFamily: 'Poppins_400Regular',
            top: 1
        },
        label4 : {
            fontSize: 12,
            color : props.color4,
            fontFamily: 'Poppins_400Regular',
            top: 1
        }
    });

    return (
        <View style={styles.containerRequisitos}>

            <View style={styles.requisitos}>

                <View>           
                    <Text style={styles.tituloRequisitos}>Sua senha deve conter</Text>
                </View>

                <View style={styles.divRequisitos}>
                    {props.icon1}
                    <Text style={styles2.label1}>1 letra maiúscula</Text>
                </View>

                <View style={styles.divRequisitos}>
                    {props.icon2} 
                    <Text style={styles2.label2}>1 letra minúscula</Text>
                </View>

                <View style={styles.divRequisitos}>
                    {props.icon3}
                    <Text style={styles2.label3}>+ de 8 caracteres</Text>
                </View>

                <View style={styles.divRequisitos}>
                    {props.icon4}
                    <Text style={styles2.label4}>Senhas iguais</Text>
                </View>

            </View>

        </View>
    );
}


