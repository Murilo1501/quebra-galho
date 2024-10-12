import React from "react";
import { View,Text, TouchableOpacity, Image,StyleSheet } from "react-native";
import { Link } from "expo-router";

type card = {
    title: string,
    image: any
}


export default function HomeCard(props: card ){
    return(
        <TouchableOpacity style={styles.card}>
            <Text style={styles.cardTitle}>{props.title}</Text>
            <View style={styles.cardBackground}></View>
            <Image source={props.image} style={styles.cardImage}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        position: 'relative',
        width: 170,
        height: 114,
        borderRadius:5,
        overflow: 'hidden',
        alignItems: 'center',
        
    },

    cardTitle: {
        width: '90%',
        height: 'auto',
        paddingVertical: 10 ,
        fontSize: 16,
        color: "#fff",
        fontWeight: 'bold',
        lineHeight: 20
    },

    cardBackground: {
        position:'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
        width: '100%',
        height: '100%',
        backgroundColor: '#60606099',
    },

    cardImage: {
        position:'absolute',
        top: 0,
        left: 0,
        zIndex: -2,
        width: '100%',
        height: '100%'
    }
})