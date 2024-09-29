import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex:1,
        width: '100%',
        height: '100%',
        position: 'relative',
    },

    card: {
        backgroundColor: '#fff',
        marginTop: 143,
        marginBottom: 20,        
        alignSelf: 'center',
        width: '90%',
        borderRadius: 15,
        height: 'auto',
        paddingBottom: 20,
        paddingTop: 20,
        alignItems: 'center',
        gap: 15
    },

    title: {
        color: '#00AAFF',
        fontSize: 28,
        width: '90%'
    },

    fieldForm: {
        width: '85%',
        gap: 15
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