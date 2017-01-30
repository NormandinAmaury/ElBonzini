/**
 * Created by Margot on 07/01/2017.
 */
import { combineReducers } from 'redux';
import userObj from './userReducers';
import auth from './authReducers';
import foosballObj from './foosballReducers';

export default combineReducers({
  userObj: userObj,
  auth: auth,
  foosballObj: foosballObj
});