import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        source={require('./../../assets/images/logo.png')}
        // Altere para o caminho da sua logo
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height:80,
    backgroundColor: '#ffff',
    borderBottomColor: '#ddd',
  },
  logo: {
    width: 100,
    height: 100,
    marginLeft:"35%"
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header;
