/**
 * Created by Margot on 23/01/2017.
 */
'use strict';

import React, {Component} from 'react';
import {
  Text,
  AppRegistry,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {Button} from 'react-native-elements'
import Style from '../../../../src/assets/styles/styles';

const ProfileScene = function (props) {
  return (
   <ScrollView style={Style.profileContainer}>

     <TouchableOpacity
      style={Style.logoutAndCloseButton}
      onPress={props.logout}>
       <Icon name="ios-exit-outline" size={35}
             color='black'
             style={Style.iconLogoutOrClose}/>
     </TouchableOpacity>
     <View style={Style.viewCenter}>
       <Text style={Style.titleProfile}>PROFILE {'\n\n'}</Text>
       <Image source={require('../../../../src/assets/images/default_user_image.jpeg')} style={Style.picProfile}/>
       <Text>{'\n\n'}</Text>
       <Text>{props.user.firstName} {props.user.lastName} {'\n\n'}</Text>
       <Text>Username : {props.user.username}</Text>
       <Text>French Department : {props.user.frenchDepartment}</Text>
       <Text>{'\n\n\n\n\n\n'}</Text>
       <Button
        small
        raised
        icon={{name: 'md-trash', type: 'ionicon', color: 'white', size: 25}}
        title='DELETE MY ACCOUNT'
        color='white'
        backgroundColor='#CF2720'
        borderRadius={10}
        buttonStyle={{width: 250}}
        onPress={props.deleteUser}
       />
     </View>
   </ScrollView>

  );
};
export default ProfileScene;

