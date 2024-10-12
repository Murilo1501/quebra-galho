import React from "react";
import { View,Text, TouchableOpacity, Image,StyleSheet } from "react-native";

type services = {
    text: string,
    image: any
}

export default function ServicesCard(props: services) {
    return(
        <TouchableOpacity style={styles.cardServices}>
            <View style={styles.cardServicesImage}>
                <Image source={props.image} style={styles.image}/>
            </View>
            <Text style={styles.cardServicesText}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardServices: {
        backgroundColor: '#F6F6F6',
        width: 270,
        minHeight: 150,
        paddingVertical: 5,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        marginHorizontal: 10
    },

    cardServicesImage: {
        width: 255,
        height: 75,
        borderRadius: 5,
        overflow: 'hidden'
    },

    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },

    cardServicesText: {
        fontSize: 12,
        width: '95%',
        textAlign: 'left',
        lineHeight: 15,
        color: '#767676',
    }
})