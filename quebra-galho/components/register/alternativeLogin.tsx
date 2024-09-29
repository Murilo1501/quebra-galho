import { View,TouchableOpacity,StyleSheet,Image } from "react-native";

export default function AlternativeLogin(){
    return(
        <View style={styles.alternativeLogin}>
                    <TouchableOpacity style={styles.fieldAlternative}>
                        <Image style={styles.iconGoogle} source={require("../../assets/images/google.webp")} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.fieldAlternative}>
                        <Image style={styles.iconFacebook} source={require("../../assets/images/facebook.png")} />
                    </TouchableOpacity>
                </View>
    )
    
}

const styles = StyleSheet.create({
    alternativeLogin: {
        flexDirection: 'row',
        paddingVertical: 5,
        width: '95%',
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 25
    },

    fieldAlternative: {
        width: 65,
        height: 65,
        borderRadius: 70,
        borderColor: '#00AAFF',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },

    iconGoogle: {
        width: 45,
        height: 45
    },

    iconFacebook: {
        width:35,
        height:35
    },
})