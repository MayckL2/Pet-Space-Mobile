import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ImageBackground,
    Image,
    ScrollView,
    TextInput
  } from "react-native";
  import { styles } from "../style.js";
  import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold} from '@expo-google-fonts/poppins';

  export default function Incorreto(props) {

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
      <Text style={styles.incorreto}>{props.text}</Text>
    );
  }