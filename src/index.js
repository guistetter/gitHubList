import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import './config/ReactotronConfig';
console.tron.log('ola');
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Ola my app</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
