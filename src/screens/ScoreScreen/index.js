import React, { Component } from 'react';
import { View, Text, FlatList, AsyncStorage } from 'react-native';
import styles from './styles';

export default class ScoreScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rank: [{text: 1}, {text: 2}]
    }
    this.loadRank()
  }

  loadRank() {
    AsyncStorage.getItem('rank').then(it => this.setState({ rank: JSON.parse(it) }))
  }

  render() {
    return (
      <View style={styles.view}>
        <FlatList
          data={this.state.rank}
          keyExtractor={(item, index) => `list-item-${index}`}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.row}>
                <View style={styles.numberView}>
                  <Text style={styles.font}>{index+1}</Text>
                </View>
                <Text style={styles.font}>{item.name} - {item.attempts} hamle</Text>
              </View>
            )
          }}
        />
      </View>
    );
  }
}
