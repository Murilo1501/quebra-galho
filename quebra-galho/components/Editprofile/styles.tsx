import {StyleSheet} from 'react-native'


export default StyleSheet.create({
    container: {
       position: 'absolute',
       width:'100%',
       height: '100%',
       zIndex: 999,
       alignItems: 'center',
       justifyContent: 'center'
    },

    containerEdit: {
        backgroundColor: '#FFFFFF',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15,
        minHeight: 500,
        marginTop: 15,
        marginBottom: 15,
        borderRadius: 10
    },

    buttonClose: {
        color: '#00AAFF',
        position: 'absolute',
        top: 12,
        right: 12,
        fontSize: 35
    },

    fieldInput: {
        width: '80%',
        height: 60, 
        position: 'relative',
    },

    input: {
        width: '100%',
        height: '100%',
        borderWidth: 2,
        borderColor: '#00AAFF',
        borderRadius: 5,
        paddingLeft: 20,
        paddingRight: 20,
    },

    select: {
        width: '100%',
        height: '100%',
    },

    fieldSelect: {
        width: '80%',
        height: 60, 
        position: 'relative',
        borderWidth: 2,
        borderColor: '#00AAFF',
        borderRadius: 5,
    },

    label: {
        position: 'absolute',
        top: 3,
        left: 8,
        fontSize: 11,
        color: '#00AAFF'
    },

    button: {
        backgroundColor: '#00AAFF',
        width: 130,
        height: 60,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        
    },

    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '600'
    }
})