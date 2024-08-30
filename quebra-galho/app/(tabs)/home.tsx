import { View,SafeAreaView,Text,StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Carousel from "@/components/carousel";
import { ScrollView } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeCard from "@/components/home/homeCard";



export default function Home(){

  const data = [
    '#FF6633',
    '#FFB399',
    '#FF33FF',
    '#FFFF99'
  ]

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Encontre</Text>
          <Text style={styles.subTitle}>Seu profissional</Text>
        </View>

        <View>
          <Text></Text>
        </View>
      </View>

      <View style={styles.searchbar}>
       <TextInput placeholder="Digite algo..."  placeholderTextColor="#888888"/>
      </View>

      <ScrollView>
        <View style={styles.carousel}>
          <Carousel data={data}/>
        </View>

         {/*main */}
    
         <View >
            <View style={styles.main}>
              <Text style={styles.textProject}>Top Projetos</Text>
              <TouchableOpacity style={styles.exploreButton}>
                <Text style={styles.textExplore}>Explore</Text>
                <Icon name="long-arrow-right" size={24} color="#00AAFF"/>
              </TouchableOpacity>
            </View>

            <View style={styles.projects}>
                <HomeCard id={"1"} img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX1xGktqkilBOCZ5vPjZTqe5GIgZB_q2QDlw&s"} title="engenharia, projeto de engenheiro civil"  />
                <HomeCard id={"2"} img={"https://www.fabricadejogos.net/wp-content/uploads/2016/10/work-731198_640.jpg"} title="programador,software em react native"  />
                <HomeCard id={"1"} img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX1xGktqkilBOCZ5vPjZTqe5GIgZB_q2QDlw&s"} title="engenharia, projeto de engenheiro civil"  />
                <HomeCard id={"2"} img={"https://www.fabricadejogos.net/wp-content/uploads/2016/10/work-731198_640.jpg"} title="programador,software em react native"  />

             
              
            </View>
        </View>
      </ScrollView>


     

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },

  header:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    paddingLeft: 32,
    paddingRight: 32

  },

  title:{
    fontSize:40,
    color:"#00AAFF",
    fontWeight:"bold"
  },

  subTitle:{
    color:"#c3c3c3",
    fontSize:32
  },

  searchbar:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    backgroundColor:"#fff",
    height:55,
    marginTop: 16,        // Correspondente ao mt-4
    marginLeft: 16,       // Correspondente ao mx-4
    marginRight: 16,      // Correspondente ao mx-4
    borderRadius: 12,     // Correspondente ao rounded-xl
    paddingTop: 4,        // Correspondente ao py-1
    paddingBottom: 4,     // Correspondente ao py-1
    paddingLeft: 16,      // Correspondente ao px-4
    paddingRight: 16,     // Correspondente ao px-4
    shadowColor: '#000',  // Parte da sombra
    shadowOffset: { width: 0, height: 10 }, // Parte da sombra
    shadowOpacity: 0.1,   // Parte da sombra
    shadowRadius: 15,     // Parte da sombra
    elevation: 6,      
  }, 

  carousel:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    marginTop: 16,        // Correspondente ao mt-4
    marginLeft: 16,       // Correspondente ao mx-4
    marginRight: 16,      // Correspondente ao mx-4
    borderRadius: 12,     // Correspondente ao rounded-xl

  },

  main:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    paddingHorizontal: 16, // px-4
    marginTop: 8, 
  },

  exploreButton:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    marginRight: 4,
    gap:8
  },

  textProject:{
    color:"#00AAFF",
    fontSize:28,
    fontWeight:"bold"
  },

  textExplore:{
    color:"#C3C3C3",
    fontSize:20,
    fontWeight:"bold"
  },

  projects:{
    flexDirection: 'row',      // Organiza os elementos em linha
    flexWrap: 'wrap',          // Permite que os elementos quebrem para a próxima linha
    marginTop: 10,             // Espaçamento superior
    justifyContent: 'center', 
    gap:20
  }


})