import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

const Input = () => {
  const [text, onChangeText] = React.useState('Useless Text');


  return (

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
     
  );
};

const styles = StyleSheet.create({
  input: {
    height: 55,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:10,
    borderColor:"#005D85"
  },
});

export default Input;