import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, View, Text, Platform} from 'react-native';

type fieldInput = {
  placeHolder: string,
  label: string
}

const Input = (props: fieldInput) => {
  const [text, onChangeText] = React.useState('');
    
  return (
    <View style={styles.fieldInput}>
        <Text style={styles.inputText}>{props.label}</Text>
        <TextInput style={styles.input} onChangeText={onChangeText} value={text}  placeholder={props.placeHolder}/>
    </View>
     
  );
};

const styles = StyleSheet.create({
  fieldInput: {
    width: '100%',
    gap:5
},

inputText: {
    fontSize: 13,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#00AAFF',
    paddingLeft: 5
},

input: {
    width: '100%',
    height: 46,
    borderBottomColor: '#00AAFF',
    borderBottomWidth: 2,
    paddingHorizontal: 5
},
});

export default Input;