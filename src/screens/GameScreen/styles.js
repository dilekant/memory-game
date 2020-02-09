import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    viewMain: {
      flexDirection: 'column',
      flex: 1
    },
    viewTop: {
      width: '100%',
      flex: .1,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      padding: 4
    },
    attempts: {
      fontSize: 20
    },
    viewContent: {
      width: '100%',
      flex: .7,
    },
    touchable: {
      top:10,
      alignItems: 'center',
      height: 40,
      width: '40%',
      marginLeft: '30%',
      borderRadius: 20,
      justifyContent: 'center',
      borderWidth: 2,
      borderColor: '#5791F9'
    },
});

export default styles;