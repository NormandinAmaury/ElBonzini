/**
 * Created by Margot on 25/01/2017.
 */
import Constant from '../../src/assets/constants/constant';
import getTk from '../helpers/getTokenHelper';

let token = '';
getTk()
 .then(response => token = response)
 .catch(err => console.log(err));

export const createFoosballSuccessful = foosball => {
  return {
    type: 'CREATE_FOOSBALL_SUCCESSFULLY',
    foosball
  }
};

export const createFoosballError = error => {
  return {
    type: 'CREATE_FOOSBALL_FAILED',
    error
  }
};

export const getAllFoosballSuccessful = foosball => {
  return {
    type: 'GET_ALL_FOOSBALL_SUCCESSFULLY',
    foosball
  }
};

export const getAllFoosballError = error => {
  return {
    type: 'GET_ALL_FOOSBALL_FAILED',
    error
  }
};

export const deleteFoosballSuccessful = index => {
  return {
    type: 'DELETE_FOOSBALL_SUCCESSFULLY',
    index
  }
};

export const deleteFoosballError = error => {
  return {
    type: 'DELETE_FOOSBALL_ERROR',
    error
  }
};

export const editFoosballSuccessful = foosball => {
  return {
    type: 'EDIT_FOOSBALL_SUCCESSFULLY',
    foosball
  }
};

export const editFoosballError = error => {
  return {
    type: 'EDIT_FOOSBALL_FAILED',
    error
  }
};

export function createFoosball(foosball) {
  return function (dispatch) {
    return fetch(Constant.apiUrl + '/foosball', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify(foosball)
    })
     .then(response => response.json())
     .then(responseJson => {
       dispatch(createFoosballSuccessful(responseJson.data));
       return Promise.resolve();
     })
     .catch(err => {
       dispatch(createFoosballError(err));
     });
  }
}

export function getAllFoosball() {
  getTk()
   .then(response => token = response)
   .catch(err => console.log(err));
  return function (dispatch) {
    return fetch(Constant.apiUrl + '/foosball', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': token
      },
    })
     .then(response => response.json())
     .then((responseJson) => {
       dispatch(getAllFoosballSuccessful(responseJson.data));
       return Promise.resolve();
     })
     .catch(err => {
       dispatch(getAllFoosballError(err));
     });
  }
}

export function deleteFoosball(id, index) {
  return function (dispatch) {
    return fetch(Constant.apiUrl + '/foosball/' + id, {
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
         dispatch(deleteFoosballSuccessful(index));
       }
       return Promise.resolve();
     })
     .catch(err => {
       dispatch(deleteFoosballError(err));
     });
  }
}

export function editFoosball(foosball,id) {
  return function (dispatch) {
    return fetch(Constant.apiUrl + '/foosball/' + id, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify(foosball)
    })
     .then(response => response.json())
     .then((response) => {
      console.log(response);
      if (response.data.ok === 1) {
        dispatch(editFoosballSuccessful(foosball));
      }
      return Promise.resolve();
     })
     .catch(err => {
       dispatch(editFoosballError(err));
     });
  }
}


