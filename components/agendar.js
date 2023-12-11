import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
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
import Navbar from "../ui/navbar.js";


export default function Inicio() {

  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false)

  function CancelarConsulta() {
    setModalVisible(true)
  }

  const drawer = useRef(null);
  const drawerPosition = 'left';

  return (

    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={() => <Navbar navigation={navigation} />}>
      <View style={[{ height: '100%' }, styles.containerHome]}>

        <View style={styles.logo}>
          <Text style={styles.logo1}>Pet<Text style={styles.logo2}>Space</Text></Text>
          <Menu color="#000" size={24} onPress={() => drawer.current.openDrawer()} />
        </View>

        <View style={styles.consultasAbertas}>
          <Text style={styles.textoPerfil}>Agendar consulta</Text>
        </View>

        <Text style={styles.subHeadLine}>Escolha uma data</Text>
        <Calendario />

      </View>

    </DrawerLayoutAndroid>

  );
}