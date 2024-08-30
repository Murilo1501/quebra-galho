import {View, Text, Image, TouchableOpacity,StyleSheet} from 'react-native';
import { useState } from 'react';
import Login from './login';

//biblioteca de fazer carrosel na tela
import AppIntroSlider from 'react-native-app-intro-slider';
import { Link } from 'expo-router';

const slides = [
  {
    key: '1',
    title:'Encontre o profissional certo com apenas um clique!',
    description: 'Acesse uma rede de especialistas qualificados e tenha o serviço ideal na palma da sua mão.',
    image: require('../assets/images/slider-img02.png')
  },

  {
    key: '2',
    title:'Economize tempo e encontre o melhor profissional para o seu projeto.',
    description: 'Com nosso app, você acessa especialistas qualificados de forma rápida e fácil, garantindo resultados de alta qualidade',
    image: require('../assets/images/slider-img01.png')
  },

  {
    key: '3',
    title:'Conquiste mais clientes com apenas um toque!',
    description: 'Amplie sua rede e atraia novas oportunidades com facilidade usando nosso app. Conecte-se rapidamente com quem procura seus serviços.',
    image: require('../assets/images/slider-img03.png')
  }
]

export default function Index() {
  const [showSlider, setShowSlider] = useState(false);

  function renderSlides({item}: any) {
    return(
      <View style={styles.containerSlider}>
          <Image source={item.image} style={styles.sliderImage}/>
        <Text style={styles.sliderTitle}>{item.title}</Text>
        <Text style={styles.sliderDescription}>{item.description}</Text>
      </View>
    )
  }

  if(showSlider) {
    return <Text>Entrou no app</Text>;
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.fieldLogo}>
          <Image source={require('../assets/images/logo.png')} style={styles.logo}/>
          <Text style={styles.titleLogo}>quebra-galho</Text>
        </View>

        <AppIntroSlider
        renderItem={renderSlides}
        data={slides}
        nextLabel=' '
        doneLabel=' '
        dotStyle={{
          backgroundColor: '#D9D9D9',
          width: 16,
          height: 16,
          borderRadius: 16
        }}
        activeDotStyle={{
          backgroundColor: '#00AAFF',
          width: 40,
          height: 16,
          borderRadius: 16
        }}
        />
      
        <TouchableOpacity style={styles.button}>
          <Link href='login' style={styles.buttonText}>Acessar</Link>
        </TouchableOpacity>
      </View>
    )
  
  };
}

const styles = StyleSheet.create({
  container: {
  backgroundColor: '#fff',
   flex: 1,
   paddingTop: 36,
   paddingBottom: 35,
   gap: 10
  },

  fieldLogo: {
    width: '90%',
    height: '18%',
    margin: 'auto'
  },

  logo: {
    width: 120,
    height: 95,
    resizeMode: 'cover',
  },

  titleLogo: {
    color: '#00AAFF',
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: 'bold'
  },

  containerSlider: {
    width: '90%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    margin: 'auto'
  },

  sliderImage: {
    width: 250,
    height: 226,
    alignItems: 'center',
    justifyContent: 'center'
  },

  sliderTitle: {
    color: '#00AAFF',
    fontSize: 17,
    textAlign: 'center',
    fontWeight: '500',
    textTransform: 'uppercase',
    lineHeight: 25
  },

  sliderDescription: {
    color: '#929292',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 15,
    width: '100%',
    lineHeight: 25
  },


  button: {
    backgroundColor: '#00AAFF',
    width: 200,
    height: 65,
    borderTopRightRadius: 10 ,
    borderBottomLeftRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto'
  },

  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  }
})