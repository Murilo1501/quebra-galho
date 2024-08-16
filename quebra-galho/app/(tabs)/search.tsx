import React, { useState, useRef } from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity, RefreshControl } from "react-native";
import Header from "@/components/logged/header";
import Filter from "@/components/logged/filter";
import Card from "@/components/logged/card";
import LocationButton from "@/components/logged/locationButton";
import { Modalize } from 'react-native-modalize';
import Chat from '@/components/logged/chat';
import moreInfo from '../moreInfo';
import { Link } from 'expo-router';

export default function Search() {
  const [selectedMenu, setSelectedMenu] = useState('Projetos');
  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  }

  const handleFreelancerPress = () => {
    setSelectedMenu('Freelancer');
    onOpen();
  };

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <Filter />
      <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        <View style={styles.menu}>
          <TouchableOpacity onPress={() => setSelectedMenu('Projetos')}>
            <View style={styles.menuItem}>
              <Text style={[styles.menuText, selectedMenu === 'Projetos' && styles.selectedMenuText]}>
                Projetos
              </Text>
              {selectedMenu === 'Projetos' && <View style={[styles.line, styles.selectedLine]} />}
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleFreelancerPress}>
            <View style={styles.menuItem}>
              <Text style={[styles.menuText, selectedMenu === 'Freelancer' && styles.selectedMenuText]}>
                Freelancer
              </Text>
              {selectedMenu === 'Freelancer' && <View style={[styles.line, styles.selectedLine]} />}
            </View>
          </TouchableOpacity>
        </View>
        
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
       

      
      </ScrollView>
      <LocationButton />


      <Modalize ref={modalizeRef} modalHeight={500}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Converse com seus clientes</Text>
          <Chat/>
          <Chat/>
          <Chat/>
          <Chat/>
          <Chat/>
          <Chat/>
        </View>
      </Modalize>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff"
  },
  menu: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "15%",
    gap: 50,
    top: 20,
    alignItems: 'center'
  },
  menuItem: {
    alignItems: 'center'
  },
  menuText: {
    fontSize: 30,
    color: 'black'
  },
  selectedMenuText: {
    color: '#00AAFF'
  },
  line: {
    height: 2,
    width: '100%',
    backgroundColor: 'transparent',
    marginTop: 5
  },
  selectedLine: {
    backgroundColor: '#00AAFF',
  },
  modalContent: {
    padding: 20,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 20,
  }
});
