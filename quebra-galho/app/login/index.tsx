import { View,Text,TextInput, TouchableOpacity, Image} from "react-native";
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
        <View style={styles.container}>
           <View style={styles.header}>
                <Text style={styles.headerText}>
                    "Conecte-se com os melhores para cada necessidade."
                </Text>
           </View>

           <View style={styles.card}>
                <Text style={styles.title}>Login</Text>
                <View style={styles.fieldForm}>
                    <View style={styles.fieldInput}>
                        <Text style={styles.inputText}>e-mail ou telefone</Text>
                        <TextInput style={styles.input} placeholder="Ex. (quebragalho@gmail.com)"/>
                    </View>

                    <View style={styles.fieldInput}>
                        <Text style={styles.inputText}>senha</Text>
                        <TextInput style={styles.input} placeholder="Ex. (quebragalho123)"/>
                    </View>
                </View>

                <TouchableOpacity  style={styles.button}>
                    <Text style={styles.buttonText}>Prosseguir</Text>
                </TouchableOpacity>

                <View style={styles.fieldOr}>
                    <Text style={styles.orText}>ou</Text>
                    <View style={styles.orLine}></View>
                </View>

                <View style={styles.alternativeLogin}>
                    <TouchableOpacity style={styles.fieldAlternative}>
                        <Image style={styles.iconGoogle} source={require("../../assets/images/google.webp")} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.fieldAlternative}>
                        <Image style={styles.iconFacebook} source={require("../../assets/images/facebook.png")} />
                    </TouchableOpacity>
                </View>

                <Text style={styles.proceed}>
                    Ao prosseguir, afirmo que estou de acordo com a <Text style={styles.proceedSpan}>Politica de privacidade</Text> e os <Text style={styles.proceedSpan}>Termos de uso</Text>
                </Text>

                <Text style={styles.noAccount}> Não possui conta? <Link href='register' style={styles.noAccountSpan}>Crie agora!</Link>
                </Text>
           </View>  
        </View>
    )

    
  
}