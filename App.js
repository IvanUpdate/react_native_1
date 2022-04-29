import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { StyleSheet, Text, View, TextInput } from 'react-native';
import styled from 'styled-components';

export default function App() {

  const name = 'Ivan';
  const [text, setText] = useState('');

  const CustomizedTextView = styled(TextInput)`
      background: #e30b52;
      color: white;
      border: solid 1px black;
      font-size: 20px;
      padding: 10px 20px;
      border-radius: 40px;
  `

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! {text}</Text>
      <Text>Hi {name}</Text>
      <CustomizedTextView value={text} onChangeText={newText => setText(newText)} placeholder="type here"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
