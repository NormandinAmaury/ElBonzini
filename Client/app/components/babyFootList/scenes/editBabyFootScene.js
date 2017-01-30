/**
 * Created by Margot on 29/01/2017.
 */
'use strict';

import React, {Component} from 'react';
import {
  Text,
  TextInput,
  AppRegistry,
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  Modal
} from 'react-native';

import {FormLabel, FormInput, Button} from 'react-native-elements';
import ErrorMessage from '../../componentsHelper/errorMessage';
import Style from '../../../../src/assets/styles/styles';
import Icon from 'react-native-vector-icons/Ionicons';

const EditBabyFootScene = function (props) {
  return (
   <ScrollView>
     <TouchableHighlight
      onPress={props.onCloseEditModal}
      style={Style.logoutAndCloseButton}
     >
       <Icon name="ios-close" size={35}
             color='black'
             style={Style.iconLogoutOrClose}/>
     </TouchableHighlight>
     <View style={Style.viewCenter}>
       <Text style={Style.titleModal}>EDIT A FOOSBALL</Text>
       <Text>{'\n\n'}</Text>
       <FormLabel labelStyle={{color: '#007F83'}}>Foosball's Name</FormLabel>
     </View>
     <FormInput onChangeText={props.updateName}
                value={props.babyFootEditedName}
     />
     <View style={Style.viewCenter}>
       <Text>{'\n\n'}</Text>
       <Button
        small
        icon={{name: 'md-create', type: 'ionicon', color: 'white', size: 20}}
        title='EDIT'
        color='white'
        backgroundColor='#007F83'
        borderRadius={10}
        buttonStyle={{width: 250}}
        onPress={props.editBabyFoot}
       />
       <ErrorMessage errorMessage={props.errorMessage} error={props.error}/>
     </View>
   </ScrollView>

  );
};
export default EditBabyFootScene;