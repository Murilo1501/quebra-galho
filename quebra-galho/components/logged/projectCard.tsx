import React,{useState} from "react";
import { View,Text,StyleSheet,Image, Button } from "react-native";
import InfoModal from "./moreInfo";
import { TouchableOpacity } from "react-native-gesture-handler";


export default function ProjectsCard (){

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };


    return(
        <TouchableOpacity style={styles.container} >
            <View style={styles.image}> 
                <Image
                    source={require('./../../assets/images/air.jpg')}
                    // Altere para o caminho da sua logo
                    style={styles.img}
                />
                 <View style={styles.status}>
                    <Text>Em Andamento</Text>
                </View>
            </View>

            <View style={styles.info}>
                <Text style={styles.price}>R$ 230,00</Text>
                <Text style={styles.description}>Conserto de ar Condicionado LG</Text>
            </View>
            
            
    </TouchableOpacity>

    

    
    )
   
}

const styles = StyleSheet.create({
    container:{
        margin:10,
        width:350,
        height:250,
        marginLeft:"5%",
        alignItems:"center",
        shadowColor: '#000', // Cor da sombra
        shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra
        shadowOpacity: 0.25, // Opacidade da sombra
        shadowRadius: 3.84, // Raio da sombra
        elevation: 5, // Somente para Android
        backgroundColor: '#fff', // Fundo branco para visualizar a sombra
        borderRadius:10
    },

    image:{
        width:"100%",
        height:"70%"

        
    },

    img:{
        width:"100%",
        height:"100%",
        objectFit:"cover"
    },


    info:{
      marginRight:"30%",
      marginTop:20
       
    },

    price:{
        fontWeight:"bold",
        fontSize:20,
    },

    status:{
        position:"absolute",
        backgroundColor:"#FFC907",
        borderRadius:5,
        left:10,
        top:10,
        padding:5

    },

    description:{

    }
})