/**
 * Created by Margot on 14/12/2016.
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

import {Card} from 'react-native-elements'
import AddBabyFootContainer from '../containers/addBabyFootContainer';
import Icon from 'react-native-vector-icons/Ionicons';

const BabyFootListScene = function (props) {
  return (
   <ScrollView>
     <View>
       <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'flex-end',paddingTop: 20, paddingRight: 15}}
                         onPress={props.onOpenModal}>
         <Icon name="ios-add-outline" size={35}
               color='black'
               style={{
                 justifyContent: 'flex-end',
                 backgroundColor: 'transparent'
               }}/>
       </TouchableOpacity>
     </View>
     <ScrollView>
     {
       props.babyFoot.map((bf, index) => {
         return (
          <TouchableHighlight key={index}  onPress={(bf) => console.log(bf)}>
            <ScrollView>
              <Card
               image={{uri: bf.picture}}
               title={bf.name}
              >
              </Card>
            </ScrollView>
          </TouchableHighlight>
         );
       })
     }
     </ScrollView>
     <Modal
      animationType={"slide"}
      transparent={false}
      visible={props.modalVisible}
      onRequestClose={() => {
        console.log("Modal has been closed.")
      }}
     >
       <AddBabyFootContainer
        onCloseModal={props.onCloseModal}
       />
     </Modal>
   </ScrollView>

  )
   ;
};
export default BabyFootListScene;

