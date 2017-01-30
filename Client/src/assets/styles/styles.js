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
     paddingTop: 20,
   },
   scrollViewLogin: {
     flex: 0.5,
     backgroundColor: '#FFFFFF',
     paddingTop: 30,
   },
   profileContainer: {
     flex: 1,
   },
  picProfile: {
    borderRadius: 50,
    width:120,
    height: 120,
  },
  iconLogoutOrClose: {
    textAlign: 'right',
    backgroundColor: 'transparent'
  },
  viewCenter: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleProfile: {
    fontSize: 25,
  },
  logoutAndCloseButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 20,
    paddingRight: 15
  },
  titleModal: {
    fontSize: 20,
  },
  viewCard : {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  addButton: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 15
  },
  titleList: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 25,
  }
 }
);

export default Style;
