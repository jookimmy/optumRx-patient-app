/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {TouchableHighlight, Button, Image, Platform, StyleSheet, Text, View} from 'react-native';


const instructions = Platform.select({
  ios: 'Press Cmd+R reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (

      <View style={styles.container1}>
        <Image source = {require('./briovalogo.png')} />
        <TouchableHighlight
          style={styles.button}
          >
        <Text> Checklist </Text>
        </TouchableHighlight>
        <Buttonß
          title="Self Diagnosis"
          color="#841584"
        />
        <Button
          title="Call Nurse"
          color="#841584"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
