import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';
import Carousel from "@/components/carousel";
import { ScrollView } from "react-native-gesture-handler";
import HomeCard from "@/components/home/homeCard";
import ServicesCard from "@/components/home/servicesCard";



export default function Home(){

  const data = [
    '#FF6633',
    '#FFB399',
    '#FF33FF',
    '#FFFF99'
  ]

  return(
      <ScrollView style={styles.containerScroll}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Encontre seu profissional</Text>
            <View style={styles.searchField}>
              <TextInput placeholder="Ex: Diarista" style={styles.inputSearch}/>
              <TouchableOpacity style={styles.buttonSearch}>
                <Entypo name="magnifying-glass" style={styles.iconButtonSearch}/>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.main}>
            <View style={styles.categories}>
                <HomeCard title="Diarista" image={require("../../assets/images/card-diarista.png")}/>
                <HomeCard title="Manutenção de ar condicionado" image={require('../../assets/images/card-arcondicionado.png')}/>
                <HomeCard title="Manutenção de computadores" image={require('../../assets/images/card-computador.png')} />
                <HomeCard title="Passeador de  animais" image={require('../../assets/images/card-passeador.png')}/>
            
                <TouchableOpacity style={styles.card}>
                  <Text style={styles.cardTitle}>Quero trabalhar</Text>
                  <Text style={styles.cardText}>Você é um profissional buscando novas oportunidades? Temos a solução perfeita para você!</Text>
                  <View style={styles.cardBackground}></View>
                  <Image source={require('../../assets/images/card-trabalho.png')} style={styles.cardImage}/>
                </TouchableOpacity>
            </View>

            <View style={styles.services}>
              <Text style={styles.servicesTitle}>Serviços populares</Text>
              <ScrollView style={styles.servicesScroll} horizontal showsHorizontalScrollIndicator={false}>  
                  <ServicesCard text="Manutenção e reparo de computadores: conserto de hardware/software para desempenho ideal." image={require("../../assets/images/services-computador.png")}/>
                  <ServicesCard text="Serviços de limpeza residencial: limpeza geral, organização para manter sua casa impecável." image={require("../../assets/images/services-limpeza.png")}/>
              </ScrollView>
            </View>
          </View>
        </View>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  containerScroll:{
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    height: '100%',
    marginTop: 32
  },

  container:{
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    paddingBottom: 15,
    gap: 15
  },

  header:{
    backgroundColor:'#00AAFF',
    width: '100%',
    height: 160,
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },

  headerTitle:{
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    width: '90%'
  },

  searchField: {
    position: 'relative',
    backgroundColor: '#fff',
    width: '90%',
    height: 60,
    borderRadius: 5,
    overflow: 'hidden'
  },

  inputSearch: {
    backgroundColor: '#fff',
    width: '80%',
    height: '100%',
    paddingLeft: 15
  },

  buttonSearch: {
    backgroundColor: '#fff',
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
    width: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },

  iconButtonSearch: {
    fontSize: 32,
    color: '#00AAFF'
  },

  main: {
    width: '100%',
    alignItems: 'center',
    gap: 10
  },

  categories: {
    width: '95%',
    height: 'auto',
    paddingHorizontal: 5,
    paddingVertical: 5,
    backgroundColor: '#F6F6F6',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10
  },

  card: {
    position: 'relative',
    width: '98%',
    height: 114,
    borderRadius:5,
    overflow: 'hidden',
    alignItems: 'center',
    gap: 6
    
},

  cardTitle: {
      width: '95%',
      height: 'auto',
      paddingTop: 10 ,
      fontSize: 16,
      color: "#fff",
      fontWeight: 'bold',
      lineHeight: 20
  },

  cardText: {
    color: '#fff',
    width: '95%',
    fontSize: 13,
    fontWeight: '600'
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
  },

  services: {
    width: '100%',
    height: 'auto',
    paddingVertical: 10,
    alignItems: 'center',
    gap: 10
  },

  servicesTitle: {
    width: '93%',
    fontSize: 17,
    fontWeight: '700',
    color: '#00AAFF'
  },

  servicesScroll: {
    width: '100%',
    height: 'auto',

  }

})