/**
 * Created by Margot on 25/01/2017.
 */

export default (state = [], action) => {
  console.log(action.type);
  switch (action.type) {
    case 'CREATE_FOOSBALL_SUCCESSFULLY':
      return [
       ...state,...action.foosball
      ];
    case 'GET_ALL_FOOSBALL_SUCCESSFULLY':
      return [
       ...action.foosball
      ];
    case 'DELETE_FOOSBALL_SUCCESSFULLY':
      return [
       ...state.slice(0,action.index),
       ...state.slice(action.index + 1)
      ];
    case 'EDIT_FOOSBALL_SUCCESSFULLY':
      return [
        ...action.foosball
      ];
    default:
      return state;
  }
};