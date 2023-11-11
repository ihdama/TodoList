import {View, StyleSheet} from 'react-native';
import React from 'react';
import Header from './src/components/Header';
import Home from './src/screens/Home';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <Header />
      <View style={styles.container}>
        <Home />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    maxWidth: 480,
    alignSelf: 'center',
  },
});
