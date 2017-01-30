/**
 * Created by Margot on 19/12/2016.
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

const AddFoosballScene = function (props) {
  return (
   <ScrollView>
     <TouchableHighlight
      onPress={props.onCloseModal}
      style={Style.logoutAndCloseButton}
     >
       <Icon name="ios-close" size={35}
             color='black'
             style={Style.iconLogoutOrClose}/>
     </TouchableHighlight>
     <View style={Style.viewCenter}>
       <Text style={Style.titleModal}>CREATE A NEW FOOSBALL</Text>
       <Text>{'\n\n'}</Text>
       <FormLabel labelStyle={{color: '#007F83'}}>Foosball's Name</FormLabel>
     </View>
     <FormInput onChangeText={props.updateName}
                value={props.name}
     />
     <View style={Style.viewCenter}>
       <Text>{'\n\n'}</Text>
       <Button
        small
        raised
        icon={{name: 'md-checkmark', type: 'ionicon', color: 'white', size: 20}}
        title='CREATE'
        color='white'
        backgroundColor='#007F83'
        borderRadius={10}
        buttonStyle={{width: 250}}
        onPress={props.addFoosball}
       />
       <ErrorMessage errorMessage={props.errorMessage} error={props.error}/>
     </View>
   </ScrollView>

  );
};
export default AddFoosballScene;