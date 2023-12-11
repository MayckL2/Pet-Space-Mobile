import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ImageBackground,
    Image,
  } from "react-native";
  import { styles } from "../style.js";
  import { useNavigation } from '@react-navigation/native';
  import { useState } from "react";
  
  export default function Botao(props) {
    const [load, setLoad] = useState(<Text style={props.estiloTxt}>{props.textoBotao}</Text>)
    const navigation = useNavigation();

    function carregamento(){
      setLoad(<Image 
        style={{objectFit: "contain"}}
        source={{uri: 'https://www.blogson.com.br/wp-content/uploads/2017/10/loading-gif-transparent-10.gif'}} 
        alt="carregamento" 
        width={50} 
        height={30}/>)

      setTimeout(()=>{
        setLoad(<Text style={props.estiloTxt}>{props.textoBotao}</Text>)
      }, 5000)
    }
  
    return (
      // props.funcao ? props.funcao : ()=> carregamento()
      <TouchableOpacity style={props.estilo} onPressOut={()=> carregamento()} onPress={props.funcao ? props.funcao : ()=> carregamento()}>
        {load}
      </TouchableOpacity>
    );
  }