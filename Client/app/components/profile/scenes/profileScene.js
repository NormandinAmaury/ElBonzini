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
  TouchableOpacity
} from 'react-native';

import Style from '../../../../src/assets/styles/styles';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileScene = function (props) {
  return (
   <ScrollView style={{flex: 1}}>
     <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
       <TouchableOpacity style={{paddingTop: 20, paddingRight: 15}}
                         onPress={props.logout}>
         <Icon name="ios-exit-outline" size={35}
               color='black'
               style={{textAlign: 'right', backgroundColor: 'transparent'}}/>
       </TouchableOpacity>
     </View>
     <Text>{props.user.firstName} {props.user.lastName} Profile </Text>
     <Text>Username : {props.user.username}</Text>
     <Text>French Department : {props.user.frenchDepartment}</Text>
   </ScrollView>
  );
};
export default ProfileScene;

