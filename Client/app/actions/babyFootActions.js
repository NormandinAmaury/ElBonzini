/**
 * Created by Margot on 25/01/2017.
 */
import Constant from '../../src/assets/constants/constant';
import getTk from '../helpers/getTokenHelper';

let token = '';
getTk()
 .then(response => token = response)
 .catch(err => console.log(err));

export const createBabyFootOptimistic = (babyFoot) => {
  return {
    type: 'CREATE_BABYFOOT_SUCCESSFULLY',
    babyFoot
  }
};

export const createBabyFootErrorOptimistic = (error) => {
  return {
    type: 'CREATE_BABYFOOT_FAILED',
    error
  }
};

export const getAllBabyFootOptimistic = (babyFoot) => {
  return {
    type: 'GET_ALL_BABYFOOT_SUCCESSFULLY',
    babyFoot
  }
};

export const getAllBabyFootErrorOptimistic = (error) => {
  return {
    type: 'GET_ALL_BABYFOOT_FAILED',
    error
  }
};

export const removeBabyFoot = () => {
  return {
    type: 'REMOVE_BABYFOOT',
  }
};

export function createBabyFoot(babyFoot) {
  return function (dispatch) {
    return fetch(Constant.apiUrl + '/babyfoot', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify(babyFoot)
    })
     .then(response => response.json())
     .then(responseJson => {
       dispatch(createBabyFootOptimistic(responseJson.data));
       return Promise.resolve();
     })
     .catch(err => {
       dispatch(createBabyFootErrorOptimistic(err));
     });
  }
}

export function getAllBabyFoot() {
  return function (dispatch) {
    return fetch(Constant.apiUrl + '/babyfoot', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': token
      },
    })
     .then(response => response.json())
     .then((responseJson) => {
       dispatch(getAllBabyFootOptimistic(responseJson.data));
       return Promise.resolve();
     })
     .catch(err => {
       dispatch(getAllBabyFootErrorOptimistic(err));
     });
  }
}


