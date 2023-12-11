import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ImageBackground,
    Image,
    TextInput,
} from "react-native";
import { styles } from "../style.js";

export default function Input(props) {
    const [text, onChangeText] = useState()
    const [estado, setEstado] = useState(styles.estado)

    return (
        <TextInput
        onBlur={() => setEstado(text ? styles.estado : styles.estadoBlur)}
        style={estado}
        placeholder={"escreva aqui..."}
        onChangeText={onChangeText}
        value={text}
      />
    );
}