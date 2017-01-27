/**
 * Created by Margot on 25/01/2017.
 */
import LocalStorage from '../helpers/localStorageHelper';

const getTk = () => {
  return new Promise((resolve, reject) => {
    LocalStorage.getToken()
     .then(response => {
       if (response) {
         resolve(response)
       } else {
         reject()
       }
     })
     .catch(err => console.log('no token provided ', err));
  });
};

export default getTk;