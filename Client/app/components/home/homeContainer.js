/**
 * Created by Margot on 21/01/2017.
 */
'use strict';

import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  Navigator,
} from 'react-native';

import BabyListContainer from '../babyFootList/containers/babyFootListContainer';
import ProfileContainer from '../profile/containers/profileContainer';
import Icon from 'react-native-vector-icons/Ionicons';
import {Tabs, Tab} from 'react-native-elements'

export default class TabBarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
    };
  }

  render() {
    return (
      <Tabs>
        <Tab
          selected={this.state.selectedTab === 'home'}
          title='Home'
          titleStyle={{fontSize: 10, color: 'black', margin: 0, padding: 0}}
          selectedTitleStyle={{fontSize: 10, color: '#007F83', margin: 0, padding: 0}}
          renderIcon={() => <Icon name="ios-contacts-outline" size={30} color='black'
                                  style={{top: 5, backgroundColor: 'transparent'}}/>}
          renderSelectedIcon={() => <Icon name="ios-contacts-outline" size={30} color='#007F83'
                                          style={{top: 5, backgroundColor: 'transparent'}}/>}
          onPress={() => this.updateSelectedTab("home")}
        >
          <BabyListContainer navigator={this.props.navigator}/>
        </Tab>
        <Tab
          selected={this.state.selectedTab === 'profile'}
          title='Profile'
          titleStyle={{fontSize: 10, color: 'black', margin: 0, padding: 0}}
          selectedTitleStyle={{fontSize: 10, color: '#007F83', margin: 0, padding: 0}}
          renderIcon={() => <Icon name="ios-home-outline" size={30} color='black'
                                  style={{top: 5, backgroundColor: 'transparent'}}/>}
          renderSelectedIcon={() => <Icon name="ios-home-outline" size={30} color='#007F83'
                                          style={{top: 5, backgroundColor: 'transparent'}}/>}
          onPress={() => this.updateSelectedTab("profile")}
        >
          <ProfileContainer navigator={this.props.navigator}/>
        </Tab>
      </Tabs>
    );
  }

  updateSelectedTab(name) {
    this.setState({
      selectedTab: name
    })
  }
}


