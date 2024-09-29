import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Division = () => {
  return (
    <View style={styles.fieldOr}>
        <Text style={styles.orText}>ou</Text>
        <View style={styles.orLine}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  fieldOr: {
    width: '90%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  orText: {
    fontSize: 16,
    fontWeight: 'medium',
    position: 'absolute',
    alignSelf: 'center',
    top: 0,
    zIndex: 10,
    color: '#00AAFF',
    backgroundColor: '#fff',
    height: 30,
    width: 38,
    textAlign: 'center',
    borderRadius: 5
},

orLine: {
    width: '100%',
    height: 3,
    backgroundColor: '#00AAFF'
},
});

export default Division;
