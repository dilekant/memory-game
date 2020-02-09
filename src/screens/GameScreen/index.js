import React, { Component } from 'react';
import { View, Text, FlatList, AsyncStorage, Alert, TouchableOpacity, Button } from 'react-native';
import Shuffle from 'shuffle-array';
import Card from '../../components/Card';
import styles from './styles';

export default class GameScreen extends Component {
  constructor(props) {
    super(props);
    this.cardList = [
      { key: 0, figure: 'one', show: false, ok: false },
      { key: 1, figure: 'two', show: false, ok: false },
      { key: 2, figure: 'three', show: false, ok: false },
      { key: 3, figure: 'one', show: false, ok: false },
      { key: 4, figure: 'two', show: false, ok: false },
      { key: 5, figure: 'three', show: false, ok: false },
      { key: 6, figure: 'four', show: false, ok: false },
      { key: 7, figure: 'five', show: false, ok: false },
      { key: 8, figure: 'seven', show: false, ok: false },
      { key: 9, figure: 'six', show: false, ok: false },
      { key: 10, figure: 'eight', show: false, ok: false },
      { key: 11, figure: 'four', show: false, ok: false },
      { key: 12, figure: 'five', show: false, ok: false },
      { key: 13, figure: 'seven', show: false, ok: false },
      { key: 14, figure: 'six', show: false, ok: false },
      { key: 15, figure: 'eight', show: false, ok: false },
    ]

    this.cards = []
    this.blockPress = false
    this.state = {
      attempts: 0,
      name: props.navigation.state.params.name,
      cards: Shuffle(this.cardList)
    }
  }

  shuffleCards() {
    this.setState({ cards: Shuffle(this.cardList), attempts: 0 })
  }

  pressCard(index) {
    if (this.blockPress) return

    const currentCard = this.cards[index]
    const activeCards = this.cards.filter(it => it.state.show && !it.state.ok)

    if (activeCards.length == 0) return currentCard.setState({ show: true })

    currentCard.setState(
      { show: true },
      () => {
        const cards = this.cards.filter(it => it.state.show && !it.state.ok)
        const equalCards = cards
          .filter(it => it.state.figure == currentCard.state.figure).length == 2

        this.setState({ attempts: ++this.state.attempts })

        if (equalCards) {
          cards.map(it => it.setState({ ok: true }))
          if (this.cards.filter(it => !it.state.show).length == 0) this.checkRank()
          return
        }

        this.setBlockPress(true)
        setTimeout(() => {
          cards.map(it => it.setState({ show: false }))
          this.setBlockPress(false)
        }, 600)
      }
    )
  }

  checkRank() {
    AsyncStorage.getItem('rank')
      .then(it => {
        let rank = JSON.parse(it)

        if (!rank) {
          AsyncStorage.setItem(
            'rank',
            JSON.stringify([{ name: this.state.name, attempts: this.state.attempts }])
          )
          Alert.alert(
            'Tebrikler!',
            `Oyunu ${this.state.attempts} hamlede bitirdiniz ve ilk 10'a girdiniz!`,
            [
              { text: 'Ana Sayfa', onPress: () => this.props.navigation.navigate('Home') },
              { text: 'Yeni Oyun', onPress: () => this.shuffleCards() },
            ]
          )
          return
        }

        const rankLength = rank.length
        const position = rank.filter(it => it.attempts < this.state.attempts).length
        
        if (position >= 10) {
          Alert.alert(
            'Tebrikler!',
            `Oyunu ${this.state.attempts} hamlede bitirdiniz!`,
            [
              { text: 'Ana Sayfa', onPress: () => this.props.navigation.navigate('Home') },
              { text: 'Yeni Oyun', onPress: () => this.shuffleCards() },
            ]
          )
          return
        }

        const secondRankPiece = rank.splice(position)


        if (rankLength == 10) secondRankPiece.pop()
        rank = rank
          .concat({ name: this.state.name, attempts: this.state.attempts })
          .concat(secondRankPiece)

        AsyncStorage.setItem(
          'rank',
          JSON.stringify(rank)
        )

        Alert.alert(
          'Tebrikler!',
          `Oyunu ${this.state.attempts} hamlede bitirdiniz ve ilk 10'a girdiniz!`,
          [
            { text: 'Ana Sayfa', onPress: () => this.props.navigation.navigate('Home') },
            { text: 'Yeni Oyun', onPress: () => this.shuffleCards() },
          ]
        )
      })
  }

  setBlockPress(bool) {
    this.blockPress = bool
  }

  render() {
    return (
      <View style={styles.viewMain}>
        <View style={styles.viewTop}>
          <Text style={styles.attempts}>{this.state.name}</Text>
          <Text style={styles.attempts}>Hamle: {this.state.attempts}</Text>
        </View>
        <View style={styles.viewContent}>
          <FlatList
            ref={component => this.flatList = component}
            data={this.state.cards}
            extraData={this.state}
            keyExtractor={item => item.key}
            numColumns={4}
            renderItem={({ item, index }) => {
              return (
                <Card
                  item={item}
                  ref={component => this.cards[index] = component}
                  onPress={() => this.pressCard(index)}
                />
              )
            }}
          />
        </View>
        <TouchableOpacity onPress={() => this.shuffleCards()} style={styles.touchable}>
          <Text style={{color: '#5791F9'}}>Sıfırla</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
