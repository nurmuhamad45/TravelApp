import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from './assets';

const App = () => {
  return (
    <View style={{backgroundColor: '#018AEB', flex: 1, alignItems: 'center'}}>
      <ILLogo />
      <Text style={styles.text}>Hello World!</Text>
    </View>
  );
};

export default App;
const styles = StyleSheet.create({});
