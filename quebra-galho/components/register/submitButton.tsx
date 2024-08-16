import { View,Text,TouchableOpacity,StyleSheet } from "react-native";

export default function SubmitButton(){
    return(
        <TouchableOpacity style={styles.submit}>
           <Text style={styles.submitText}>Prosseguir</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    submit:{
        marginTop:50,
        backgroundColor:"#00AAFF",
        width:300,
        borderRadius:30,
        padding:20,
        alignItems:"center",
        marginLeft:40
        
    },

    submitText:{
        textAlign:"center",
        color:"#ffff",
        fontWeight:"bold"
    }


})