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

import Style from '../../../src/assets/styles/styles';
import { Card } from 'react-native-elements'
import AddBabyFootContainer from '../containers/addBabyFootContainer';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScene = function (props) {
  return (
    <ScrollView style={{flex: 1}}>
      <TouchableOpacity style={{paddingTop: 20, paddingRight: 15}}
                        onPress={props.onOpenModal}>
        <Icon name="ios-add-outline" size={30}
              color='black'
              style={{ textAlign: 'right',backgroundColor: 'transparent'}} />
      </TouchableOpacity>
      {
        props.babyfoot.map((babyfoot, index) => {
          return (
            <TouchableHighlight key={index}  onPress={() => console.log(babyfoot)}>
              <View style={{flex: 1}}>
                <Card
                  image={babyfoot.babyfootPic}
                  title={babyfoot.name}
                >
                </Card>
              </View>
            </TouchableHighlight>
          );
        })
      }
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={props.modalVisible}
        onRequestClose={() => {console.log("Modal has been closed.")}}
      >
        <AddBabyFootContainer
          onCloseModal={props.onCloseModal}
          babyfoot={props.babyfoot}
        />
      </Modal>
    </ScrollView>

  );
};
export default HomeScene;

