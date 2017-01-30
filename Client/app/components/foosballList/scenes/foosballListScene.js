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

import {Card, Grid, Col} from 'react-native-elements'
import AddFoosballContainer from '../containers/addFoosballContainer';
import EditFoosballContainer from '../containers/editFoosballContainer';
import Icon from 'react-native-vector-icons/Ionicons';
import Style from '../../../../src/assets/styles/styles';

const FoosballListScene = function (props) {
  return (
     <ScrollView>
       <TouchableOpacity
        style={Style.addButton}
        onPress={props.onOpenModal}>
         <Icon name="ios-add-outline" size={35}
               color='black'
               style={Style.iconLogoutOrClose} />
       </TouchableOpacity>
       <View style={Style.viewCenter}>
       <Text style={Style.titleList}>YOUR FOOSBALL</Text>
       </View>
     <ScrollView>
       {
         props.foosball.map((foosball, index) => {
           return (
            <TouchableHighlight key={index} onPress={(foosball) => console.log(foosball)}>
              <ScrollView>
                <Card key={index}
                      title={foosball.name}
                      titleStyle={{textAlign: 'center'}}
                      image={{uri: foosball.picture}}
                >
                  <View style={Style.viewCard}>
                    <TouchableOpacity
                     onPress={() => {
                       props.onOpenEditModal(foosball)
                     }}>
                      <View style={{flexDirection: 'row',}}>
                      <Text style={{color: 'orange'}}>EDIT  </Text>
                      <Icon name={'md-create'}
                            color='orange'
                            size={15}/>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                     onPress={() => {
                       props.alertDelete(foosball, index)
                     }}
                    >
                      <View style={{flexDirection: 'row',}}>
                        <Text style={{color: 'red'}}>DELETE  </Text>
                        <Icon name={'md-trash'}
                              color='red'
                              size={15}/>
                      </View>
                    </TouchableOpacity>
                    <Modal
                     animationType={"slide"}
                     transparent={false}
                     visible={props.editModalVisible}
                     onRequestClose={() => {
                       console.log("Modal has been closed.")
                     }}>
                      <EditFoosballContainer
                       onCloseEditModal={props.onCloseEditModal}
                       foosballEdited={props.foosballEdited}
                       foosball={foosball}
                      />
                    </Modal>
                  </View>
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
      }}>
       <AddFoosballContainer
        onCloseModal={props.onCloseModal}
       />
     </Modal>
     </ScrollView>
  )
   ;
};
export default FoosballListScene;

