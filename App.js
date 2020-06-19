import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
export default class App extends Component {
  render() {
    return (
      <View style={StyleSheet.container}>
        <Text>Ola my app</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
