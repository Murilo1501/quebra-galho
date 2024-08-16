import { View,Text,StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function LocationButton(){

    return(
    <View style={styles.location}>
         <Icon style={styles.icon} name="location-on" size={40} color="#fff" />
    </View>
    )
   
}

const styles = StyleSheet.create({
    location:{
        backgroundColor:"#00AAFF",
        height:60,
        width:60,
        borderRadius:50,
        position:"absolute",
        top:"85%",
        left:"80%"
    },

    icon:{
       textAlign:"center",
       paddingTop:10
    }
})