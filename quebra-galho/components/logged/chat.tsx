import { View,Text,StyleSheet, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Chat(){
    return(
        <TouchableOpacity style={styles.container}>
            <View style={styles.photo}>
                <Icon style={styles.icon} name="user" size={40} color="#a9a9a9" />
            </View>

            <View style={styles.name}>
                <Text>Murilo Ribeiro Falconeri</Text>
            </View>

           

            
        </TouchableOpacity>
      
 
    )
}

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:50,
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        gap:20,
        margin:20,
        paddingBottom:30,
        borderBottomWidth:1,
        borderBottomColor:"#9B9B9B"
    },

    photo:{
        width:60,
        height:60,
        borderRadius:50,
        backgroundColor:"#d3d3d3"

    },

    icon:{
        textAlign:"center",
        top:5
    },



    name:{

    },

    division:{
        height:1,
        backgroundColor: '#9B9B9B',
    }
})