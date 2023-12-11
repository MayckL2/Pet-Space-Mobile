import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
  } from "react-native";
import { styles } from "../style.js";
import { Bone } from "lucide-react-native";
import { useNavigation } from '@react-navigation/native';

export default function SemConsulta(){

    const navigation = useNavigation();

    return(
        <View style={styles.cardSemConsulta}>
            <Bone color={'#424242'} size={48} />
            <Text style={{fontFamily: 'Poppins_600SemiBold', fontSize: 12, color: '#424242'}}>Nenhuma consulta em aberto!</Text>
            <Text style={styles.textoSemConsulta}>Marque um horário no PetSpace para cuidar do seu pet!</Text>
            <TouchableOpacity onPress={()=> navigation.replace('agendar')} style={{borderWidth: 2, borderColor: '#A57CF8', borderRadius: 12, paddingVertical: 8, paddingHorizontal: 40}}>
                <Text style={{fontSize: 12, fontFamily: 'Poppins_700Bold', color: '#A57CF8'}}>Agendar consulta!</Text>
            </TouchableOpacity>
        </View>
    );
}