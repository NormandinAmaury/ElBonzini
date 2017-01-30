/**
 * Created by Margot on 07/01/2017.
 */
import Constant from '../../src/assets/constants/constant';
import getTk from '../helpers/getTokenHelper';

let token = '';
getTk()
 .then(response => token = response)
 .catch(err => console.log(err));

export const createUserOptimistic = user => {
  return {
    type: 'CREATE_USER_SUCCESSFULLY',
    user
  }
};

export const createUserErrorOptimistic = error => {
  return {
    type: 'CREATE_USER_FAILED',
    error
  }
};

export const loginSuccessOptimistic = user => {
  return {
    type: 'LOGGED_SUCCESSFULLY',
    user
  }
};

export const loginErrorOptimistic = error => {
  return {
    type: 'LOGGED_FAILED',
    error
  }
};

export const addToken = tk => {
  token = tk;
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

export const getUserOptimistic = user => {
  return {
    type: 'GET_USER_SUCCESSFULLY',
    user
  }
};

export const getUserErrorOptimistic = error => {
  return {
    type: 'GET_USER_FAILED',
    error
  }
};

export const deleteUserOptimistic = () => {
  return {
    type: 'DELETE_USER_SUCCESSFULLY',
  }
};

export const deleteUserErrorOptimistic = error => {
  return {
    type: 'DELETE_USER_FAILED',
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
        if (responseJson.success) {
          dispatch(createUserOptimistic(responseJson));
          login(responseJson.userData);
          return Promise.resolve();
        } else {
          return Promise.reject(responseJson);
        }
      })
      .catch(responseJson => {
        dispatch(createUserErrorOptimistic(responseJson.msg));
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
        if (responseJson.success) {
          dispatch(loginSuccessOptimistic(responseJson.userData));
          dispatch(addToken(responseJson.token));
          return Promise.resolve();
        } else {
          return Promise.reject(responseJson);
        }
      })
      .catch((responseJson) => {
        dispatch(loginErrorOptimistic(responseJson.msg));
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

export function deleteUser() {
  return function (dispatch) {
    return fetch(Constant.apiUrl + '/user', {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': token
      },
    })
     .then(response => response.json())
     .then((response) => {
       if (response.data.ok === 1) {
         dispatch(deleteUserOptimistic());
       }
       return Promise.resolve();
     })
     .catch(err => {
       dispatch(deleteUserErrorOptimistic(err));
     });
  }
}


