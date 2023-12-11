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
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';

export default function Inicio() {
  const [data, setData] = useState()
  const [id, setId] = useState()

  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false)

  function CancelarConsulta(id) {
    setId(id)
    setModalVisible(true)
  }
  async function cancelar(id) {
    console.log(id)
    fetch(
      `https://pet-space-api-20231127140924.victorioushill-36c6ab00.brazilsouth.azurecontainerapps.io/api/agendamento/cancelar?idAgendamento=${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${Global.token}`
        }
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        // setModalVisible(false)
        navigation.replace('inicio')
      })
      .catch(error => console.log(error))
  }

  useEffect(() => {
    console.log(Global.token)
    setTimeout(() => {
      if (!Global.token) {
        navigation.replace('login')
      } else {


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
              if (c.status == 1) {
                return <Consulta key={i} nomeDoutor={'Dr. Djalma'} data={c.data} horario={c.horario} cor={"#7BEB78"} status={"Confirmado"} estiloBotao={styles.cancelar} disabled={false} textoBotao={"Cancelar"} funcao={() => CancelarConsulta(c.idAgendamento)} />
              }
            })
            // filtra os indices undefineds do array
            // console.log(dados.filter((dados)=> dados != undefined ))
            setData(dados.filter((dados)=> dados != undefined ))
            console.log(data)
          });
      }
    }, 2000)
  }, []);

  const drawer = useRef(null);
  const drawerPosition = 'left';

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

      <ScrollView style={{ height: '100%' }}>
        <View style={styles.containerHome}>
          <View style={styles.logo}>
            <Text style={styles.logo1}>Pet<Text style={styles.logo2}>Space</Text></Text>
            <Menu color="#000" size={24} onPress={() => drawer.current.openDrawer()} />
          </View>

          <View style={styles.cardBox}>
            <View style={styles.card}>
              <Text style={styles.textoCard}>Agende uma consulta com veterinários <Text style={styles.textoCardDestaque}>altamente</Text> qualificados. </Text>
              <View style={styles.fundoImg}>
                <Image style={styles.imgCard} source={require('../assets/home.png')} alt={'coelho'} />
              </View>
            </View>
          </View>

          <View style={styles.botoesHome}>
            <TouchableOpacity style={styles.botaoServico}>
              <Syringe color={'#8C52FF'} size={24} />
              <Text style={styles.servicoHome}>Vacinas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoServico2}>
              <ShieldPlus color={'#424242'} size={24} />
              <Text style={styles.servicoHome2}>Consultas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoServico}>
              <Stethoscope color={'#8C52FF'} size={24} />
              <Text style={styles.servicoHome}>Cirurgias</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.consultasAbertas}>
            <Text style={styles.textoConsultas}>Suas consultas em aberto</Text>
          </View>

          <View style={{ marginBottom: 200, gap: 16 }}>

            {data == undefined ? <SemConsulta /> : data }

          </View>

          <ModalCancelarConsulta visible={modalVisible} fecharModal={() => setModalVisible(false)} aceito={() => cancelar(id)} textModal='Tem certeza que deseja cancelar a consulta?' />

          <Image style={styles.waves2} source={require('../assets/wave.png')} alt={'ondas'} width={500} height={500} />

        </View>
      </ScrollView>

    </DrawerLayoutAndroid>
  );
}