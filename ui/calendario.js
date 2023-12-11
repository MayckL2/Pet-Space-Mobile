import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, ScrollView } from "react-native";
import { Agenda } from "react-native-calendars";
import { useNavigation } from "@react-navigation/native";
import Global from "../global";
import { api } from "../api/rotas";
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';

const Calendario = () => {
  const [items, setItems] = useState({});
  const [seleted, setSelected] = useState('2023-11-12')
  const [data, setData] = useState()

  const navigation = useNavigation();

  function salvarData(data, hora, id) {
    Global.dataConsulta = data;
    Global.horaConsulta = hora;
    Global.idAgendamento = id
    navigation.replace("agendar2");
  }

  useEffect(() => {
    fetch(
      `https://pet-space-api-20231127140924.victorioushill-36c6ab00.brazilsouth.azurecontainerapps.io/api/agendamento/listar`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        const dados = data.map((c, i) => {
          if (c.status == 0) {
            return <TouchableOpacity id={i}
              onPress={c.idAgendamento ? () => salvarData(c.data, c.horario, c.idAgendamento) : () => navigation.replace('inicio')}
              style={{
                paddingVertical: "5%",
                width: "50%",
                marginBottom: 10,
                borderColor: "#8C52FF",
                borderWidth: 3,
                borderRadius: 20,
                alignSelf: 'center'
              }}
            >
              <View
                style={{
                  flexDirection: "col",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ textAlign: "center", width: "100%", color: '#424242', fontFamily: 'Poppins_700Bold' }}
                >
                  {c.data}
                </Text>
                <Text
                  style={{ textAlign: "center", width: "100%", color: '#424242', fontFamily: 'Poppins_700Bold' }}
                >
                  {c.horario}
                </Text>
              </View>
            </TouchableOpacity>
          }
        })
        setData(dados)
        // const time = [];
        // for (let i = 0; i < data.length; i++) {
        //   time[data[i]["data"]] = [];
        //   if(data[i]["idCliente"] == null){
        //     time[data[i]["data"]].push({
        //       horario: data[i]["horario"],
        //       data: data[i]["data"],
        //       idAgendamento: data[i]["idAgendamento"]
        //     });
        //     const newItems = {};
        //     Object.keys(time).forEach((key) => {
        //       newItems[key] = time[key];
        //     });
        //     setItems(newItems);
        //     seleted == '2023-11-12' ? setSelected(data[i]["data"]) : setSelected(seleted)
        //   }else{
        //     setItems({"2023-11-12": [{data: 'Nenhuma consulta disponível para agendamento', horario: ""}]})
        //   }
        // }
      });
  }, []);

  const [fontLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  })

  // if (!fontLoaded){
  //   return null;
  // }


  return (
    <ScrollView style={{ flex: 1, width: "100%", overflow: "hidden", paddingHorizontal: '5%', gap: 10 }}>
      {/* <Agenda
        items={items}
        renderItem={renderItem}
        selected={seleted}
        loadItemsForMonth={() => null}
        style={{
          paddingRight: 10,
          paddingTop: 0,
          marginTop: -100,
          backgroundColor: "white",
        }}
        hideKnob={true}
      /> */}
      {data}
    </ScrollView>
  );
};

export default Calendario;
