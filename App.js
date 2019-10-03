import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const firebaseConfig = {
  apiKey: "AIzaSyCEyI7UyACToUQfl4s1wR2cxUtpkkizkIE",
  authDomain: "paywatch-fb176.firebaseapp.com",
  databaseURL: "https://paywatch-fb176.firebaseio.com",
  projectId: "paywatch-fb176",
  storageBucket: "",
};

firebase.initializeApp(firebaseConfig);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
