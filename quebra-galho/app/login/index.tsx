import { View,Text,TextInput } from "react-native";
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
           <Header/>

            <View>
                <Text style={styles.title}> Realizar Login</Text>
                <Text style={styles.subTitle}>Insira seu email ou telefone para realizar o login</Text>

                <View style={styles.inputs}>
                    <View>
                       <Input/>
                    </View>

                    <View>
                      <Input/>
                    </View>
                    <Text style={styles.paragraph}>Nao tem uma conta ainda ? <Link href={"/register"}>Cadastre-se aqui</Link> </Text>

                    <Division></Division>
                    <AlternativeLogin></AlternativeLogin>

                    <View style={styles.footer}>
                        <Text style={styles.paragraphFooter}>Ao prosseguir, afirmo que estou de acordo com a Política de privacidade e os Termos de uso </Text>
                        <SubmitButton/>
                    </View>
                  

                </View>
            </View>
        </View>
    )

    
  
}