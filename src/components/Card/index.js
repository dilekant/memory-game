import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Emoji from 'react-native-emoji';

import styles from './styles';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
        ...props.item
    };
  }

  getStyle() {
    if (this.state.show && this.state.ok) return {...styles.card, ...styles.correct}
    if (this.state.show && !this.state.ok) return {...styles.card, ...styles.incorrect}
    return {...styles.card}
  }

  render() {
    return (
        <View style={this.getStyle()}>
            <TouchableOpacity
            style={styles.touchable}
            onPress={this.props.onPress}>
            <Emoji
                name={this.state.show ? this.state.figure : 'question'}
                style={styles.emoji}
            />
            </TouchableOpacity>
        </View>
    );
  }
}
