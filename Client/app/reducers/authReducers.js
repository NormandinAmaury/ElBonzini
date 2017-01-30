/**
 * Created by Margot on 23/01/2017.
 */
import getTk from '../helpers/getTokenHelper';

let token = '';
getTk()
 .then(response => token = response)
 .catch(err => console.log(err));

export default (state = {}, action) => {
  console.log(action.type);
  switch (action.type) {
    case 'IS_LOGIN': {
      return token !== '' ;
    }
    default:
      return state;
  }
};