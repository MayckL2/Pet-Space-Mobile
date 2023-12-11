import {
    Text,
    View,
    Modal,
} from "react-native";
import { styles } from "../style.js";
import { AlertCircle } from "lucide-react-native";
import { TouchableOpacity } from "react-native";
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold} from '@expo-google-fonts/poppins';

export default function ModalCancelarConsulta(props) {
    
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
            statusBarTranslucent
            >
            <View style={styles.fundoModal}>
                <View style={{backgroundColor: '#F6F6F6', paddingVertical: 24, width: '80%', alignSelf: 'center', marginTop: '75%', borderRadius: 12, justifyContent: 'center', alignItems: 'center', gap: 20}}>
                    <AlertCircle size={50} color="#424242" />
                    <Text style={{width: '70%', color: '#424242', fontFamily: 'Poppins_500Medium', textAlign: 'center'}}>{props.textModal}</Text>
                    <View style={{flexDirection: 'row', gap: 12}}>
                        <TouchableOpacity style={{borderRadius: 12, borderWidth: 2, borderColor: '#EF4A3C', paddingVertical: 8, paddingHorizontal: 32}} onPress={props.aceito}>
                            <Text style={{color: '#EF4A3C', fontSize: 14, fontFamily: 'Poppins_700Bold'}}>SIM</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{borderRadius: 12, borderWidth: 2, borderColor: '#08C046', paddingVertical: 8, paddingHorizontal: 32}} onPress={props.fecharModal}>
                            <Text style={{color: '#08C046', fontSize: 14, fontFamily: 'Poppins_700Bold'}}>NÃO</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}