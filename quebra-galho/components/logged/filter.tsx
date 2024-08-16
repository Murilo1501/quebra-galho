import { View,StyleSheet,Text } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Filter(){
    return(
        <View style={styles.container}>
            <View style={styles.filter}>
                <View >
                    <Text style={styles.city}>Guarulhos,SP,Brasil</Text>
                    <Text >Técnico de ar condicionado</Text>
                </View>

                <View >
                    <Icon style={styles.icon} name="location-on" size={30} color="#000" />
                </View>
            </View>

         </View>
    )
  
}

const styles = StyleSheet.create({
    
    container:{
        width:350,
        marginLeft:"5%",
        alignItems: 'center',
        shadowColor: '#000', // Cor da sombra
        shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra
        shadowOpacity: 0.25, // Opacidade da sombra
        shadowRadius: 3.84, // Raio da sombra
        elevation: 5, // Somente para Android
        backgroundColor: '#fff', // Fundo branco para visualizar a sombra
        borderRadius:10,
        marginBottom:10

    },

    filter:{
        display:"flex",
        flexDirection:"row",
        padding:15,
        gap:100,

    },

    city:{
        fontSize:17,
        fontWeight:"bold"
    },

    icon:{
        justifyContent:"center",
        alignItems:"center"
    }


})