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
import AddBabyFootContainer from '../containers/addBabyFootContainer';
import EditBabyFootContainer from '../containers/editBabyFootContainer';
import Icon from 'react-native-vector-icons/Ionicons';

const BabyFootListScene = function (props) {
  return (
   <ScrollView>
     <View>
       <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'flex-end', paddingTop: 20, paddingRight: 15}}
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
            <TouchableHighlight key={index} onPress={(bf) => console.log(bf)}>
              <ScrollView>
                <Card key={index}
                      title={bf.name}
                      titleStyle={{textAlign: 'center'}}
                      image={{uri: bf.picture}}
                >
                  <View style={{ flexDirection: 'row',justifyContent: 'space-between'}}>

                      <TouchableOpacity
                       onPress={() => {props.onOpenEditModal(bf)}}
                      >
                        <Icon name={'md-create'}
                              color='orange'
                              size={30}
                        />

                      </TouchableOpacity>

                      <TouchableOpacity
                       onPress={() => {props.alertDelete(bf, index)}}
                      >
                          <Icon name={'md-trash'}
                              color='red'
                              size={30}
                        />

                      </TouchableOpacity>
                    <Modal
                     animationType={"slide"}
                     transparent={false}
                     visible={props.editModalVisible}
                     onRequestClose={() => {
                       console.log("Modal has been closed.")
                     }}
                    >
                      <EditBabyFootContainer
                       onCloseEditModal={props.onCloseEditModal}
                       babyFootEdited={props.babyFootEdited}
                       bf={bf}
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

