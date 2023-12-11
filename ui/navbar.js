import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Home, Contact, Dog, FolderOpen, Power } from "lucide-react-native";
import { styles } from "../style";
import Global from "../global";

const Navbar = ({ navigation }) => {

    function logoff(){
        Global.token = ''
        navigation.replace('home')
    }
    
    return (
        <View style={styles.navigationContainer}>
            <View style={styles.boxNav}>
                <TouchableOpacity style={styles.listItem} onPress={() => navigation.replace('inicio')}>
                    <Home color={'#424242'} size={19} />
                    <Text style={styles.textListItem}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.listItem} onPress={() => navigation.replace('perfil')}>
                    <Contact color={'#424242'} size={19} />
                    <Text style={styles.textListItem}>Perfil</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.listItem} onPress={() => navigation.replace('agendar')}>
                    <Dog color={'#424242'} size={19} />
                    <Text style={styles.textListItem}>Agendar consulta</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.listItem} onPress={() => navigation.replace('historico')}>
                    <FolderOpen color={'#424242'} size={19} />
                    <Text style={styles.textListItem}>Histórico</Text>
                </TouchableOpacity>
            </View>

            <View style={[styles.boxNav, styles.boxNavLogoff]}>
                <TouchableOpacity style={styles.listItem} onPress={() => logoff()}>
                    <Power color={'#EF4A3C'} size={19} />
                    <Text style={[styles.textListItem, styles.logoff]}>Sair</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Navbar;
