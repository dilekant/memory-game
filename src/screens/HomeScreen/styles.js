import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    viewMain: {
      flexDirection: 'column',
      flex: 1
    },
    viewTitle: {
      flex: .3,
      alignItems: 'center',
      justifyContent: 'center'
    },
    textTitle: {
      fontSize: 20
    },
    viewButtons: {
      flex: .5,
      padding: 10,
    },
    touchable: {
      marginTop: 20,
      alignItems: 'center',
      height: 40,
      width: '40%',
      marginLeft: '30%',
      borderRadius: 20,
      justifyContent: 'center',
      borderWidth: 2,
      borderColor: '#5791F9'
    },
    textInput: {
        borderWidth:1,
        borderColor: '#D8DDE1',
        paddingBottom: 0,
        height: 40,
        width: '75%',
        marginLeft: '12.5%',
        
        paddingLeft: 15,
        paddingTop: 5
    }
});

export default styles;