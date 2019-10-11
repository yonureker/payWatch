import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import firebaseConfig from './config.js';
import * as firebase from 'firebase';

firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View className="first" style={styles.first}></View>
    );
  }
}

const styles = StyleSheet.create({
  first: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
  },
});