/**
 * Created by Margot on 07/01/2017.
 */
import Constant from '../../src/assets/constants/constant';
import getTk from '../helpers/getTokenHelper';

let token = '';
getTk()
 .then(response => token = response)
 .catch(err => console.log(err));

export const createUserOptimistic = (user) => {
  return {
    type: 'CREATE_USER_SUCCESSFULLY',
    user
  }
};

export const createUserErrorOptimistic = (error) => {
  return {
    type: 'CREATE_USER_FAILED',
    error
  }
};

export const loginSuccessOptimistic = (user) => {
  return {
    type: 'LOGGED_SUCCESSFULLY',
    user
  }
};

export const loginErrorOptimistic = (error) => {
  return {
    type: 'LOGGED_FAILED',
    error
  }
};

export const addToken = (token) => {
  return {
    type: 'ADD_TOKEN',
    token
  }
};

export const logout = () => {
  return {
    type: "LOGOUT",
  }
};

export const getUserOptimistic = (user) => {
  return {
    type: 'GET_USER_SUCCESSFULLY',
    user
  }
};

export const getUserErrorOptimistic = (error) => {
  return {
    type: 'GET_USER_FAILED',
    error
  }
};

export function createUser(user) {
  return function (dispatch) {
    return fetch(Constant.apiUrl + '/signup', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(responseJson => {
        dispatch(createUserOptimistic(responseJson));
        login(responseJson.userData);
        return Promise.resolve();
      })
      .catch(err => {
        dispatch(createUserErrorOptimistic(err));
      });
  }
}

export function login(user) {
  return dispatch =>
    fetch(Constant.apiUrl + '/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(responseJson => {
        dispatch(loginSuccessOptimistic(responseJson.userData));
        dispatch(addToken(responseJson.token));
        getTk()
         .then(response => token = response)
         .catch(err => console.log(err));
        return Promise.resolve();
      })
      .catch(err => {
        dispatch(loginErrorOptimistic(err));
      });
}

export function getUser() {
  return dispatch =>
   fetch(Constant.apiUrl + '/user', {
     method: 'GET',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
       'Authorization': token
     }
   })
    .then(response => response.json())
    .then(responseJson => {
      dispatch(getUserOptimistic(responseJson.data));
      return Promise.resolve();
    })
    .catch(err => {
      dispatch(getUserErrorOptimistic(err));
    });
}

