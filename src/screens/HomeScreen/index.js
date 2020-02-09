import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button, TextInput } from 'react-native';

import styles from './styles';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null
    };
  }

  playGame() {
    if (!this.state.name) {
      alert('Lütfen adınızı girin')
      return
    }

    this.props.navigation.navigate('Game', { name: this.state.name })
  }

  render() {
    return (
      <View style={styles.viewMain}>
        <View style={styles.viewTitle}>
          <Text style={styles.textTitle}>Hafıza oyununa hoşgeldiniz</Text>
        </View>
        <View style={styles.viewButtons}>
          <View style={{justifyContent: 'center'}}>
            <TextInput
              value={this.state.name}
              onChangeText={name => this.setState({ name })}
              style={styles.textInput}
            />
          </View>
          <TouchableOpacity style={styles.touchable} onPress={() => this.playGame()} >
            <Text style={{color: '#5791F9'}}>Oyuna Başla</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchable} onPress={() => this.props.navigation.navigate('Score')} >
            <Text style={{color: '#5791F9'}}>Skorlar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}