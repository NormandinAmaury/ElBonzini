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
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    loginText: {
      textAlign: 'center',
      color: 'white',
      fontSize: 25,
    },
    loginButton: {
      width: 200,
      marginRight: 40,
      marginLeft: 40,
      marginTop: 10,
      paddingTop: 5,
      paddingBottom: 5,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: mainColor,
      backgroundColor: mainColor,
    },
    signUpButton: {
      width: 200,
      marginRight: 40,
      marginLeft: 40,
      marginTop: 10,
      paddingTop: 5,
      paddingBottom: 5,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'black',
      backgroundColor: 'white',
    },
    signUpText: {
      textAlign: 'center',
      color: 'black',
      fontSize: 15
    },
    loginContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    inputLogin: {
      textAlign: 'center',
      height: 40,
    },
    scrollViewSignup: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      paddingTop: 100,
      marginLeft: 16,
      marginRight: 16
    },
    scrollViewLogin: {
      flex: 0.5,
      backgroundColor: '#FFFFFF',
      paddingTop: 100,
      marginLeft: 16,
      marginRight: 16
    },
  }
);

export default Style;
