import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: "center",
      alignItems: "center"
    },
    containerScroll: {
        backgroundColor: 'white',
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: '40%',
        minHeight: '100%'
      },
    botaoBranco:{
        borderWidth: 3,
        borderStyle: "solid",
        borderColor: "#8C52FF",
        width: "70%",
        alignItems: "center",
        paddingVertical: 15,
        alignSelf: "center",
        borderRadius: 15,
        marginVertical: 5,
        justifyContent: "center"
    },
    txtBotaoBranco:{
        color: "#8C52FF",
        fontFamily: "Poppins_700Bold",
        fontSize: 20
    },
    botaoRoxo:{
        borderWidth: 3,
        borderStyle: "solid",
        borderColor: "transparent",
        backgroundColor: "#8C52FF",
        width: "70%",
        alignItems: "center",
        paddingVertical: 15,
        alignSelf: "center",
        borderRadius: 15,
        marginVertical: 5,
        justifyContent: "center"
    },
    txtBotaoRoxo:{
        color: "white",
        fontFamily: 'Poppins_700Bold',
        fontSize: 20
    },
    estado:{
        backgroundColor: "white",
        borderColor: "gray",
        borderWidth: 2,
        borderRadius: 10,
        width: "70%",
        alignSelf: "center",
        paddingVertical: 15,
        paddingHorizontal: 15,
        fontSize: 16,
        fontFamily: 'Poppins_400Regular'
    },
    estadoBlur:{
        backgroundColor: "#ef4b3c2f",
        borderColor: "#EF4A3C",
        borderWidth: 2,
        borderRadius: 10,
        width: "70%",
        alignSelf: "center",
        paddingVertical: 15,
        paddingHorizontal: 15,
        fontSize: 16
    },
    // estadoFocus:{
    //     backgroundColor: "#EF4A3C"
    // }
    waves:{
        position: 'absolute',
        top: 0,
        zIndex: -1
    },
    waves2:{
        position: 'absolute',
        bottom: 0,
        zIndex: -1
    },
    labelHome:{
        fontSize: 24,
        width: '60%',
        textAlign: "center",
        alignSelf: "center",
        fontFamily: 'Poppins_500Medium',
        color: '#424242'        
    },
    petspace:{
        color: "#8C52FF",
        fontFamily: 'Poppins_700Bold'
    },
    tituloRequisitos:{
        fontFamily: 'Poppins_500Medium'
    },
    requisitos:{
        gap: 12
    },
    containerRequisitos:{
        backgroundColor: '#F6F6F6',
        width: '70%',
        borderRadius: 12,
        padding: 18,
        alignSelf: 'center'
    },
    divRequisitos:{
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center',
    },
    box:{
        width: '100%',
        gap: 25
    },
    olhoSenha:{
        position: 'absolute',
        top: 47,
        right: 80,
    },
    olhoSenhaLogin:{
        position: 'absolute',
        top: 47,
        right: 80,
    },
    labelLogin:{
        fontSize: 24,
        width: '80%',
        textAlign: "center",
        alignSelf: "center" ,
        fontFamily: 'Poppins_500Medium',
        color: '#424242' 
    },
    modal:{
        backgroundColor: 'white',
        width: '80%',
        paddingVertical: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        alignSelf: 'center',
        marginTop: '50%',
    },
    fundoModal:{
        backgroundColor: 'rgba(128, 128, 128, 0.733)',
        height: '100%',
    },
    txtModal:{
        fontSize: 14,
        textAlign: 'center',
        width: '90%',
        fontFamily: 'Poppins_500Medium',
        color: '#939393'
    },
    labelModal:{
        fontSize: 20,
        textAlign: 'center',
        width: '80%',
        fontFamily: 'Poppins_600SemiBold'
    },
    botaoVerde:{
        borderWidth: 3,
        borderStyle: "solid",
        borderColor: "#08C046",
        width: "80%",
        alignItems: "center",
        paddingVertical: 10,
        alignSelf: "center",
        borderRadius: 15,
        marginVertical: 5,
        justifyContent: "center"
    },
    botaoVermelho:{
        borderWidth: 3,
        borderStyle: "solid",
        borderColor: "#EF4A3C",
        width: "80%",
        alignItems: "center",
        paddingVertical: 10,
        alignSelf: "center",
        borderRadius: 15,
        marginVertical: 5,
        justifyContent: "center"
    },
    txtBotaoVerde:{
        color: "#08C046",
        fontFamily: 'Poppins_700Bold',
        fontSize: 15
    },
    txtBotaoVermelho:{
        color: "#EF4A3C",
        fontFamily: 'Poppins_700Bold',
        fontSize: 15
    },
    tituloCadastro:{
        fontSize: 24,
        fontWeight: '600',
        color: '#424242',
        paddingTop: '40%',
        paddingBottom: 12,
        fontFamily: 'Poppins_500Medium'
    },
    labelCadastro:{
        fontSize: 14,
        alignSelf: 'center',
        width: '70%',
        fontFamily: 'Poppins_500Medium',
        color: '#424242' 
    },
    input:{
        width: '110%',
        gap: 8,
        paddingTop: 8,
        paddingBottom: 20
    },
    requisitosSenha:{
        paddingTop: 12,
        width: '110%',
        alignItems: 'center',
        paddingBottom: 32
    },
    botaoCadastro:{
        width: '110%',
        paddingBottom: 8
    },
    conta:{
        color: '#424242',
        fontFamily: 'Poppins_400Regular'
    },
    linkLogin:{
        color: '#8C52FF',
        fontFamily: 'Poppins_700Bold'
    },
    inputSenha:{
        width: '110%',
        gap: 8,
        paddingTop: 8,
        paddingBottom: 20,
        position: 'relative'
    },
    olhoSenhaCad:{
        position: 'absolute',
        top: 57,
        right: 80,
    },
    logo1:{
        color: '#000',
        fontSize: 18,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: {width: 0, height: 1},
        textShadowRadius: 4,
        fontFamily: 'Poppins_700Bold'
    },
    logo2:{
        fontFamily: 'Poppins_700Bold',
        color: '#A57CF8',
        fontSize: 18
    },
    logo:{
        paddingTop: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 40,
        paddingBottom: 28,
        marginBottom: 36,
        borderBottomColor: '#f2f2f6',
        borderBottomWidth: 1,
        backgroundColor: '#FFFFFF'
    },
    containerHome:{
        flex: 1,
        backgroundColor: 'white',
        height: '100%'
    },
    textoCard:{
        fontSize: 12,
        width: '70%',
        textAlign: 'left',
        fontFamily: 'Poppins_500Medium'
    },
    textoCardDestaque:{
        fontSize: 12,
        fontFamily: 'Poppins_700Bold',
        color: '#A57CF8',
        textAlign: 'left'
    },
    cardBox:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card:{
        width: '75%',
        flexDirection: 'row',
        borderWidth: 1,
        paddingHorizontal: 24,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 124,
        borderRadius: 12,
        position: 'relative',
        borderColor: '#f2f2f6',
        marginBottom: 24
    },
    imgCard:{
        right: 40,
        top: -20
    },
    fundoImg:{
        height: '90%',
        width: 84,
        backgroundColor: '#A57CF8',
        top: -7,
        borderBottomEndRadius: 12,
        borderBottomLeftRadius: 12
    },
    botoesHome:{
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12,
        flexDirection: 'row',
        marginBottom: 20
    },
    iconsHome:{
        width: 24,
        height: 24
    },
    servicoHome:{
        color: '#8C52FF',
        fontSize: 12,
        fontFamily: 'Poppins_500Medium'
    },
    botaoServico:{
        paddingVertical: 12,
        width: 88,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12,
        backgroundColor: '#E9E0FD',
        borderRadius: 4
    },
    botaoServico2:{
        paddingVertical: 12,
        width: 88,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12,
        backgroundColor: 'rgba(66,66,66,0.2)',
        borderRadius: 4,
    },
    servicoHome2:{
        color: '#424242',
        fontSize: 12,
        fontFamily: 'Poppins_500Medium'
    },
    consultasAbertas:{
        width: '75%',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(100,100,100,0.1)',
        alignSelf: 'center',
        marginBottom: 32
    },
    textoConsultas:{
        paddingBottom: 6,
        fontFamily: 'Poppins_500Medium'
    },
    cardSemConsulta:{
        width: 312,
        paddingVertical: 40,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#F6F6F6',
        borderRadius: 12,
        gap: 12,
    },
    textoSemConsulta:{
        width: '70%',
        fontSize: 12,
        color: '#939393',
        fontFamily: 'Poppins_500Medium',
        textAlign: 'center'
    },
    cardConsulta:{
        width: 332,
        padding: 16,
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: 12,
        gap: 32,
        borderWidth: 1,
        borderColor: '#E8F3F1'
    },
    textoConsulta:{
        fontSize: 12,
        color: '#ADADAD',
        fontFamily: 'Poppins_500Medium',
    },
    dataConsulta:{
        color: '#555555',
        fontSize: 12,
        fontFamily: 'Poppins_500Medium',
    },
    cancelar:{
        borderRadius: 8, 
        paddingVertical: 12, 
        paddingHorizontal: 40, 
        backgroundColor: '#E9E0FD'
    },
    concluido:{
        borderRadius: 8, 
        paddingVertical: 12, 
        paddingHorizontal: 40, 
        backgroundColor: '#EDE9E9',
        borderWidth: 2,
        borderColor: '#939393'
    },
    incorreto:{
        color: 'red',
        marginHorizontal: '15%',
        marginTop: 5,
        fontFamily: 'Poppins_400Regular'
    },
    navigationContainer: {
        flex: 1,
        paddingHorizontal: 32,
        paddingTop: 88,
        paddingBottom:32,
        justifyContent: "space-between",
        alignItems: "center",
        gap: 12       

    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        gap: 12,
        padding: 8
    },
    boxNav: {
        width: '100%',
        gap: 12
    },
    textListItem:{
        fontSize: 16,
        fontFamily: 'Poppins_400Regular',
        top: 1
    },
    logoff:{
        color:'#EF4A3C'
    },
    boxNavLogoff:{
        borderTopColor: '#E5E5E5',
        borderTopWidth: 1
    },
    containerPerfil: {
        flex: 1,
        backgroundColor: '#A57CF8',
    },
    boxPerfil: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentPerfil: {
        flex: 1,
        width: 384,
        borderRadius: 12,
        backgroundColor: 'white',
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textoPerfil: {
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'Poppins_500Medium',
        color: '#424242'

    },
    boxInput: {
        width: '120%',
        paddingBottom: 16,
    },
    boxApagarConta: {
        marginTop: '50%',
        marginBottom: 16,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    subHeadLine:{
        textAlign: 'center',
        fontSize: 15,
        fontFamily: 'Poppins_500Medium',
        color: '#424242',
        padding: 16
    }
  });

  export {styles}