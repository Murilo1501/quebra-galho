import { View,Text } from "react-native";
import Header from "@/components/register/header";
import styles from "./styles";
import { Link } from "expo-router";
import Division from "@/components/register/division";
import AlternativeLogin from "@/components/register/alternativeLogin";
import Input from "@/components/register/inputs";
import SubmitButton from "@/components/register/submitButton";

export default function Register(){
    return(
        <View style={styles.container}>
            <Header/>

            <View>
                <Text style={styles.title}>Criar sua Conta</Text>
                <Text style={styles.subTitle}>Já possui uma conta ? <Link href={"login"}>Faca login aqui</Link> </Text>

                <View style={styles.alternativeLogin}>
                    <AlternativeLogin/>
                </View>
                <Division/>

                <View >
                    <Input/>
                    <Input/>
                    <Input/>
                    <Input/>
                </View>

                <View>
                    <SubmitButton/>
                </View>


            </View>
        </View>
       
    )
}