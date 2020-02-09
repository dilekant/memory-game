import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    view: {
      flex: 1
    },
    row: {
      flex: 1,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
      paddingHorizontal: 10,
      paddingVertical: 20,
      flexDirection: 'row'
    },
    numberView: {
      width: 30,
      alignItems: 'center',
      marginRight: 10,
      borderRightColor: '#ddd',
      borderRightWidth: 1
    },
    font: {
      fontSize: 20
    }
});

export default styles;