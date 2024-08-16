import React from "react";
import { View,Text, TouchableOpacity, Image,StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function HomeCard({id,img,title}){
    return(
        
       <TouchableOpacity style={styles.card}>
            <Image source={{uri:img}} style={styles.img}/>
            <Text style={styles.title}>{title}</Text>
       </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    img:{
        width: '100%',        
        height: 160,          
        borderRadius: 8,      
        resizeMode: 'cover',
    },

    card:{
        borderRadius: 8,          // rounded-md: bordas arredondadas com raio de 8px
        borderWidth: 1,           // border: largura da borda
        borderColor: '#D1D5DB',   // border-gray-300: cor da borda (hexadecimal correspondente ao gray-300)
        paddingHorizontal: 8,    // px-3: padding horizontal de 12px (3 * 4px)     // py-3: padding vertical de 12px (3 * 4px)   
        paddingVertical: 8,  // py-2: padding vertical de 8px (2 * 4px)
        backgroundColor: '#FFFFFF', // bg-white: fundo branco
        width: 160,          // w-[182px]: largura de 182px
        marginVertical: 8,   // my-2: margem vertical de 8px (2 * 4px)
        shadowColor: '#000', // shadow-md: cor da sombra
        shadowOffset: { width: 0, height: 4 }, // shadow-md: deslocamento da sombra
        shadowOpacity: 0.1,  // shadow-md: opacidade da sombra
        shadowRadius: 4,     // shadow-md: raio da sombra
        elevation: 4,        // shadow

    },

    title:{
        padding:10,

    }
})