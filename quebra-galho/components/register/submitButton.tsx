import { View,Text,TouchableOpacity,StyleSheet } from "react-native";

export default function SubmitButton(){
    return(
        <TouchableOpacity  style={styles.button}>
            <Text style={styles.buttonText}>Prosseguir</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#00AAFF',
        maxWidth: 250,
        width: '95%',
        height: 55,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },


})