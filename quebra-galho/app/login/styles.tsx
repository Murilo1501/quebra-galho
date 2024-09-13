import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex:1,
        width: '100%',
        height: '100%',
        position: 'relative',
    },

    header: {
        backgroundColor: '#00AAFF',
        width: '100%',
        height: 190,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },

    headerText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 25,
        textTransform: 'uppercase',
        textAlign: 'center',
        width:'95%',

    },

    card: {
        backgroundColor: '#fff',
        position: 'absolute',
        top: 143,        
        alignSelf: 'center',
        width: '90%',
        borderRadius: 15,
        minHeight: 650,
        paddingBottom: 20,
        paddingTop: 20,
        alignItems: 'center',
        gap: 20
    },

    title: {
        color: '#00AAFF',
        fontSize: 30,
        width: '90%'
    },

    fieldForm: {
        width: '85%',
        gap: 15
    },

    fieldInput: {
        width: '100%',
        gap:5
    },

    inputText: {
        fontSize: 13,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#00AAFF',
        paddingLeft: 5
    },

    input: {
        width: '100%',
        height: 46,
        borderBottomColor: '#00AAFF',
        borderBottomWidth: 2,
        paddingHorizontal: 5
    },

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

    fieldOr: {
        width: '90%',
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },

    orText: {
        fontSize: 16,
        fontWeight: 'medium',
        position: 'absolute',
        alignSelf: 'center',
        top: 0,
        zIndex: 10,
        color: '#00AAFF',
        backgroundColor: '#fff',
        height: 30,
        width: 38,
        textAlign: 'center',
        borderRadius: 5
    },

    orLine: {
        width: '100%',
        height: 3,
        backgroundColor: '#00AAFF'
    },

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

    proceed: {
        fontSize: 17,
        color: '#929292',
        fontWeight: '400',
        width: '90%',
        textAlign: 'center',
    },

    proceedSpan: {
        textDecorationLine: 'underline'
    },

    noAccount: {
        fontSize: 17,
        color: '#929292',
        fontWeight: '500'
    },

    noAccountSpan: {
        color: '#00AAFF',
        fontSize: 18
    }

})

export default styles