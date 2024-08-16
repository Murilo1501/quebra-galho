import { View,Text,StyleSheet,Image } from "react-native";

export default function AlternativeLogin(){
    return(
        <View style={styles.container}>
            <View style={styles.login}>
                <Image
                    source={require('./../../assets/images/facebook.png')}
                    style={styles.logo}
                />
                <Text style={styles.loginText}>Facebook</Text>
               
            </View>
            <View style={styles.login}>
                <Image
                    source={require('./../../assets/images/google.webp')}
                    style={styles.logo}
                />
                <Text style={styles.loginText}>Google</Text>
            </View>
        </View>
    )
    
}

const styles = StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"row",
        gap:20,
        justifyContent:"center"
    },

    login:{
        width:150,
        height:50,
        borderRadius:30,
        borderWidth:1,
        borderColor:"#005D85",
       display:"flex",
       flexDirection:"row",
       alignItems:"center",
       justifyContent:"center",
       gap:20
    },

    loginText:{
        textAlign:"center",

    },

    logo:{
        width:40,
        height:40,
    }
})