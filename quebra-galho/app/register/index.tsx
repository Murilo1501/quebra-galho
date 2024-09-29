import { View,Text, ScrollView, StatusBar} from "react-native";
import Header from "@/components/register/header";
import styles from "./styles";
import { Link } from "expo-router";
import Division from "@/components/register/division";
import AlternativeLogin from "@/components/register/alternativeLogin";
import Input from "@/components/register/inputs";
import SubmitButton from "@/components/register/submitButton";

export default function Register(){
    return(
        <ScrollView style={styles.container}>
            <StatusBar backgroundColor='#00AAFF'/>
            <Header title=' "Sua solução ideal. ao alcance de um clique." '/>
            
            <View style={styles.card}>
                <Text style={styles.title}>Cadastro</Text>
                <View style={styles.fieldForm}>
                    <Input label="Nome Completo" placeHolder="Ex. (Paula Monteiro Silva.)"/>
                    <Input label="telefone" placeHolder="Ex. ((99) 99999-9999)"/>
                    <Input label="email" placeHolder="Ex: (quebragalho@gmail.com)"/>
                    <Input label="senha" placeHolder="Ex. (quebragalho123)"/>
                </View>
                <SubmitButton />
                <Division />
                <AlternativeLogin />
                <Text style={styles.proceed}>
                    Ao prosseguir, afirmo que estou de acordo com a <Text style={styles.proceedSpan}>Politica de privacidade</Text> e os <Text style={styles.proceedSpan}>Termos de uso</Text>
                </Text>
                <Text style={styles.noAccount}> já possui conta? <Link href='register' style={styles.noAccountSpan}>Crie agora!</Link>
                </Text>
            </View>
        </ScrollView>  
    )
}