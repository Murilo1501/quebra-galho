import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

type header = {
  title: string
}

const Header = (props: header) => {
  return (
    <View style={styles.header}>
        <Text style={styles.headerText}>
          {props.title}
        </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top:0,
    backgroundColor: '#00AAFF',
    width: '100%',
    height: 190,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 25,
    textTransform: 'uppercase',
    textAlign: 'center',
    width:'95%',

  },
});

export default Header;
