/**
 * Created by Margot on 07/01/2017.
 */
import LocalStorage from '../helpers/localStorageHelper';
import Constant from '../../src/assets/constants/constant';

const initialState = {
  user: {},
  token: '',
  isLoggedIn: false,
  error: null,
};

export default (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case 'CREATE_USER_SUCCESSFULLY':
      return Object.assign({}, state, {
        user: action.user,
        error: null
      });
    case 'CREATE_USER_FAILED':
      return Object.assign({}, state, {
        error: action.error
      });
    case 'LOGGED_FAILED':
      return Object.assign({}, state, {
        error: action.error
      });
    case 'LOGGED_SUCCESSFULLY':
      if (JSON.stringify(state.user) === JSON.stringify({})) {
        return Object.assign({}, state, {
          user: action.user,
          error: null,
        });
      } else {
        return Object.assign({}, state, {
          error: null,
        });
      }
      break;
    case 'GET_USER_SUCCESSFULLY':
      return Object.assign({}, state, {
        user: action.user,
        error: null
      });
    case 'GET_USER_FAILED':
      return Object.assign({}, state, {
        error: action.error
      });
    case 'ADD_TOKEN':
      LocalStorage.onValueChange(Constant.STORAGE_KEY,
       action.token);
      return Object.assign({}, state, {
        token: action.token,
        error: null
      });
    case 'LOGOUT':
      LocalStorage.removeToken();
      return Object.assign({}, state, {
        token: undefined,
        user: undefined
      });
    default:
      return state;
  }
};