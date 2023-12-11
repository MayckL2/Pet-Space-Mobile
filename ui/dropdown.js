import DropDownPicker from "react-native-dropdown-picker";
import { useState, useEffect } from "react";
import Global from "../global";
import { ScrollView } from "react-native";
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold} from '@expo-google-fonts/poppins';

export default function DropDown(props) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState({label: 'Cachorro', value: 1});
    const [items, setItems] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
    ]);

    useEffect(()=>{
        Global.racaPet = value
        console.log(Global.racaPet)
    }, [value])

    return (
        <DropDownPicker
            open={open}
            value={props.value}
            items={props.items}
            setOpen={setOpen}
            setValue={props.racaPet}
            setItems={setItems}
            containerStyle={{marginBottom: 45, width: '70%', flex: 1, alignSelf: 'center', marginVertical: 5, zIndex: 2, color: '#8C52FF' }}
            style={{ borderColor: 'gray', borderWidth: 2 }}
            placeholder={props.items.label ? props.items.label : "Selecione a raça do seu Pet"}
        />
    )
}