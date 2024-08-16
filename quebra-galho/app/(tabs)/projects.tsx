import { View,Text,ScrollView,StyleSheet,Button,Image,StatusBar, SafeAreaView} from "react-native";
import React, { useState } from 'react';
import FilterProjects from "@/components/logged/filterProject";
import Header from "@/components/logged/header";
import ProjectsCard from "@/components/logged/projectCard";
import AddButton from "@/components/logged/addButton";
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Link } from "expo-router";



export default function Projects(){
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <View style={styles.container}>
            <Header/>
            <FilterProjects/>

            <View style={styles.info}>
                <Text style={styles.orders}>02 pedidos em andamento</Text>
                <Text style={styles.filter}>Ordenar por mais relevantes</Text>
            </View>
            
            <ScrollView>
           
                <TouchableOpacity>
                    <Link href={"moreInfo"}>
                        <ProjectsCard />
                        <ProjectsCard />
                        <ProjectsCard />
                        <ProjectsCard />
                    </Link>
                </TouchableOpacity>
               
               
            </ScrollView>
            <AddButton/>

           
           
        </View>


    )
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:"#fff"
    },

    info:{
        alignItems:"flex-start",
        paddingLeft:20,
        paddingBottom:10
    },

    orders:{
        color:"#716464",
        fontSize:15
    },

    filter:{
        fontSize:15
    },

   
      

})