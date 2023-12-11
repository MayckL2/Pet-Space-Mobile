import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
  } from "react-native";
import { styles } from "../style.js";
import { CalendarDays, Clock, Dot } from "lucide-react-native";
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold} from '@expo-google-fonts/poppins';

export default function Consulta(props){

    const [ fontLoaded ] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold
    })

    //        

    return(
        <View style={styles.cardConsulta}>
            <View style={{gap: 4}}>
                <Text style={{fontWeight: '600', fontSize: 18, color: '#101623', fontFamily: 'Poppins_600SemiBold'}}>{props.nomeDoutor}</Text>
                <Text style={styles.textoConsulta}>Veterinário</Text>
            </View>

            <View style={{gap: 16}}>
                <View style={{flexDirection: 'row', gap: 8}}>
                    <View style={{flexDirection: 'row', gap: 5}}>
                        <CalendarDays size={16} color="#555555" />
                        <Text style={styles.dataConsulta}>{props.data}</Text>
                    </View>

                    <View style={{flexDirection: 'row', gap: 5}}>
                        <Clock size={16} color="#555555" />
                        <Text style={styles.dataConsulta}>{props.horario}</Text>
                    </View>

                    <View style={{flexDirection: 'row', gap: 3}}>
                        <Dot size={16} color={props.cor} />
                        <Text style={styles.dataConsulta}>{props.status}</Text>
                    </View>
                </View>
                
                <TouchableOpacity style={props.estiloBotao} disabled={props.disabled} onPress={props.funcao ? props.funcao : null}>
                    <Text style={{fontSize: 14, fontFamily: 'Poppins_600SemiBold', color: '#959595', textAlign: 'center'}}>{props.textoBotao}</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}