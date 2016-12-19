/**
 * Created by Margot on 14/12/2016.
 */
import {StyleSheet, Navigator} from 'react-native';

var mainColor = '#007F83';

var Style = StyleSheet.create({
    container: {
      flex: 1,
    },
    splashContainer: {
      backgroundColor: mainColor,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    splashLogo: {
      color: 'white',
      fontSize: 32
    },
    navigationBar: {
      backgroundColor: mainColor,
      alignItems: 'center'
    },
    navigationBarText: {
      color: 'white',
      margin: 10,
      fontSize: 16
    },
    introContainer: {
      backgroundColor: mainColor,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    loginContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    scrollViewSignup: {
      backgroundColor: '#FFFFFF',
      flex: 1,
      paddingTop: 30,
    },
    scrollViewLogin: {
      flex: 0.5,
      backgroundColor: '#FFFFFF',
      paddingTop: 30,
    },
  }
);

export default Style;
