import { View,Text,ScrollView,StyleSheet,Button,Image,StatusBar, SafeAreaView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles";

export default function moreInfo(){
    return (
        <SafeAreaView style={styles.modalContent}>
        <ScrollView style={styles.scrollview}>
          <View style={styles.relative}>
            <Image
              source={require('./../../assets/images/air.jpg')}
              // Altere para o caminho da sua logo
              style={styles.photo}
            />
            <View style={styles.headerInfo}>
              <TouchableOpacity style={styles.backButton}>
                <Icon name="chevron-left" size={24} color="#00AAFF" />
              </TouchableOpacity>

              <TouchableOpacity style={styles.heartButton}>
                <Icon name="heartbeat" size={24} color="#fff" />
              </TouchableOpacity>
            </View>

            <View style={styles.headerFooter}>
              <View style={styles.priceContainer}>
                <Text style={styles.priceLevelText}>100</Text>
                <Text style={styles.priceText}>200</Text>
              </View>

             
            </View>
          </View>

          <View style={styles.main}>
            <Text style={styles.nameText}>Conserto de ar condicionado</Text>
            <View style={styles.locationContainer}>
              < Icon name="map-marker" size={25} color="#8C9EA6" />
              <Text style={styles.locationText}>Guarulhos</Text>
            </View>
          </View>

          <View style={styles.containerMainInfo}>
            {4.5 && (
              <View style={styles.ratingContainer}>
                <View style={styles.iconContainer}>
                  <Icon name="star" size={24} color="#D58574" />
                </View>
                <View>
                  <Text style={styles.text}>5</Text>
                  <Text style={styles.text}>Ratings</Text>
                </View>
              </View>
            )}
            
            {100 && (
              <View style={styles.containerMainPrice}>
                <View style={styles.iconContainer}>
                  <Icon name="money" size={24} color="black" />
                </View>
                <View>
                  <Text style={styles.text}>200</Text>
                  <Text style={styles.text}>Price Level</Text>
                </View>
              </View>
            )}

            {4.5 && (
              <View style={styles.ratingContainer}>
                <View style={styles.iconContainer}>
                  <Icon name="map-signs" size={24} color="#000" />
                </View>
                <View>
                  <Text style={styles.text}>5</Text>
                  <Text style={styles.text}>Ratings</Text>
                </View>
              </View>
            )}
          </View>
          {50 && (
            <Text style={styles.descriptionText}>
              dinewaudnawunduawnudnawnduawhudnawudnauwnduawnduawnduawnduanwudnwaudnauw
            </Text>
          )}

              <View style={styles.contact}>
                {10 && (
                  <View style={styles.infoContainer}>
                    <Icon name="phone" size={24} color="#00AAFF" />
                    <Text style={styles.textContact}>11933089944</Text>
                  </View>
                )}
                {10 && (
                  <View style={styles.infoContainer}>
                    <Icon  name="envelope" size={24} color="#00AAFF" />
                    <Text style={styles.textContact}>falconeri1501@gmail.com</Text>
                  </View>
                )}
                {10 && (
                  <View style={styles.infoContainer}>
                    <Icon name="map-pin" size={24} color="#00AAFF" />
                    <Text style={styles.addressText}>Rua Nossa Senhora da Pompeia 613</Text>
                  </View>
                )}
                <View style={styles.bookNowContainer}>
                  <Text style={styles.bookNowText}>Aceitar</Text>
                </View>
              </View>
        </ScrollView>
      </SafeAreaView>
       
    )
}