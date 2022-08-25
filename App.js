
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Slider from '@react-native-community/slider';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: 0
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Slider
          minimumValue={0}
          maximumValue={100}
          onValueChange={(value) => this.setState({ valor: value })}
          value={this.state.valor}
          minimumTrackTintColor="#ff0000"
          maximumTrackTintColor="#000000"
        />
        <Text style={styles.texto}>
          Peso {this.state.valor.toFixed(2)}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  texto: {
    textAlign: 'center',
    fontSize: 20,
  }
})