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

const EditBabyFootScene = function (props) {
  return (
   <ScrollView>
     <TouchableHighlight
      onPress={props.onCloseEditModal}
     >
       <Text style={{marginTop: 50, fontSize: 15}}>Close</Text>
     </TouchableHighlight>
     <Text>Edit a foosball</Text>
     <FormLabel labelStyle={{color: '#007F83'}}>Foosball's Name</FormLabel>
     <FormInput onChangeText={props.updateName}
                value={props.babyFootEditedName}
     />
     <Text></Text>
     <Button
      small
      icon={{name: 'check', type: 'evilicon', color: 'white'}}
      title='EDIT'
      color='white'
      backgroundColor='#007F83'
      borderRadius={10}
      buttonStyle={{width: 250}}
      onPress={props.editBabyFoot}
     />
     <ErrorMessage errorMessage={props.errorMessage} error={props.error}/>
   </ScrollView>

  );
};
export default EditBabyFootScene;