import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
      flexGrow: 1,
      margin: 4,
      borderWidth: 1,
      borderColor: '#ddd',
      backgroundColor: '#eee'
    },
    touchable: {
      padding: 20,
      width: '100%',
      alignItems: 'center',
    },
    correct: {
      backgroundColor: '#d4edda'
    },
    incorrect: {
      backgroundColor: '#f8d7da'
    },
    emoji: {
      fontSize: 30
    }
});

export default styles;