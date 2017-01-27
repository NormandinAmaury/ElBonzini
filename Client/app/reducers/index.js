/**
 * Created by Margot on 07/01/2017.
 */
import { combineReducers } from 'redux';
import userObj from './userReducers';
import auth from './authReducers';
import babyFootObj from './babyFootReducers';

export default combineReducers({
  userObj: userObj,
  auth: auth,
  babyFootObj: babyFootObj
});