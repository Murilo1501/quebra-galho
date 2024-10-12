import { View,Text, ScrollView, StatusBar} from "react-native";
import styles from "./styles";
import React from "react";
import Input from "@/components/register/inputs";
import Header from "@/components/register/header";
import { Link } from "expo-router";
import Division from "@/components/register/division";
import AlternativeLogin from "@/components/register/alternativeLogin";
import SubmitButton from "@/components/register/submitButton";


export default function login(){
    return(
        <ScrollView style={styles.container}>
           <StatusBar backgroundColor='#00AAFF'/>
           <Header title='  "Conecte-se com os melhores para cada necessidade." '/> 
           <View style={styles.card}>
                <Text style={styles.title}>Login</Text>
                <View style={styles.fieldForm}>
                    <Input label="e-mail ou telefone" placeHolder="Ex. (quebragalho@gmail.com)"/>
                    <Input label="senha" placeHolder="Ex. (quebragalho123)"/>
                </View>
                <SubmitButton />
                <Division />
                <AlternativeLogin />
                <Text style={styles.proceed}>
                    Ao prosseguir, afirmo que estou de acordo com a <Text style={styles.proceedSpan}>Politica de privacidade</Text> e os <Text style={styles.proceedSpan}>Termos de uso</Text>
                </Text>
                <Text style={styles.noAccount}> Não possui conta? <Link href='home' style={styles.noAccountSpan}>Crie agora!</Link>
                </Text>
           </View>  
        </ScrollView>
    )

    
  
}