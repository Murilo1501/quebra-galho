import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Division = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>ou</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    width: '90%', // Define a largura máxima do container
    alignSelf: 'center', // Centraliza o container na tela
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
  },
  text: {
    marginHorizontal: 10,
    fontSize: 16,
  },
});

export default Division;
