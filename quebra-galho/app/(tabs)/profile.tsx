import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView} from "react-native";
import { useState } from "react";

//Icons
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';

//Components
import Editprofile from '../../components/Editprofile'
function Card() {
    return(
        <View style={styles.card}>
            <Image source={require('../../assets/images/air.jpg')} style={styles.cardImage}/>
        </View>
    )
}

export default function Profile(){
    const [modalEdit, setModalEdit] = useState(false);


    return(  
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerBall}></View>
                <Text style={styles.headerText}>Logo</Text>
            </View>

            <ScrollView style={styles.scroll}>
                <View style={styles.fieldProfile}>
                    <Image source={require('../../assets/images/vector.png')} style={styles.profileImage}/>
                    <View style={styles.profileItem}>
                        <Text style={styles.profileName}>Jubileu Silva Pinto</Text>
                        <Text style={styles.profileProfession}>Técnico de Ar condicionado</Text>
                        <View style={styles.profileMap}>
                            <Feather name="map-pin" style={styles.icon}/>
                            <Text style={styles.location}>Guarulhos,SP</Text>
                        </View>
                        <View style={styles.profileStars}>
                            <AntDesign name="star" style={styles.star}/>
                            <AntDesign name="star" style={styles.star}/>
                            <AntDesign name="star" style={styles.star}/>
                            <AntDesign name="star" style={styles.star}/>
                            <AntDesign name="star" style={styles.star}/>
                        </View>
                        <View style={styles.profileAbout}>
                            <Text style={styles.aboutText}>Sou um profissional que busca consertar ar condicionados muito bem :)</Text>
                        </View>
                        <View style={styles.profileButton}>
                            <TouchableOpacity style={styles.button} onPress={() => {setModalEdit(true)}}>
                                <Text style={styles.buttonText}>Editar Perfil</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>Compartilhar</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.profileData}>
                            <View style={styles.dataField}>
                                <Text style={styles.dataTitle}>Entregas</Text>
                                <Text style={styles.dataText}>0</Text>
                            </View>
                            <View style={styles.dataField}>
                                <Text style={styles.dataTitle}>Recomendações</Text>
                                <Text style={styles.dataText}>0</Text>
                            </View>
                            <View style={styles.dataField}>
                                <Text style={styles.dataTitle}>Conecções</Text>
                                <Text style={styles.dataText}>0</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.publications}>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </View >
            </ScrollView>

            {
                (modalEdit && <Editprofile closeModal={() => {setModalEdit(false)}}/>)
            }
        </View>
    )  
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: 34,
        alignItems: 'center',
        gap: 10
    },

    header: {
        width: '85%',
        height: 75,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },

    headerBall: {
        width: 32,
        height: 32,
        backgroundColor: '#00AAFF',
        borderRadius: 32
    },
    headerText: {
        fontSize: 24,
        fontWeight: '500'
    },

    scroll: {
        width: '100%',
        paddingTop: 10,
    },

    fieldProfile: {
        width: '100%',
        alignItems: 'center',
        gap: 10,
    },

    profileImage:{
        width: 88.5,
        height: 88.5,
        borderRadius: 88.5,
    },

    profileItem: {
        width: '100%',
        alignItems: 'center',
        gap: 10
    },

    profileName:{
        fontSize: 28,
        fontWeight: '500'
    },

    profileProfession:{
        fontSize: 15,
        fontWeight: '500',
        color: '#909090'
    },

    profileMap:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },

    icon: {
        fontSize: 15
    },

    location: {
        fontSize: 15
    },

    profileStars: {
        flexDirection: 'row',
        gap: 3,
        alignItems: 'center'
    },

    star: {
        color: '#FFC907',
        fontSize: 15
    },

    profileAbout: {
        backgroundColor: '#FBFBFB',
        width: '90%',
        height: 'auto',
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    aboutText: {
        textAlign: 'justify'
    },

    profileButton: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        gap: 10
    },

    button: {
        backgroundColor: '#00AAFF',
        width: 118,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },

    buttonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '400'
    },

    profileData: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        gap: 5
    },

    dataField: {
        alignItems: 'center',
        gap: 3
    },

    dataTitle: {
        fontSize: 16,
        fontWeight: '400'
    },

    dataText: {
        fontSize: 35
    },

    publications: {
        width:'100%',
        height: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
        marginBottom: 15
    },

    card: {
        width: '33.33%',
        height:  135,
        borderColor: 'transparent',
        borderWidth: 2,
        borderRadius: 5,
        overflow: 'hidden'
    },

    cardImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    }

})