/**
 * Created by Margot on 25/01/2017.
 */

export default (state = [], action) => {
  console.log(action.type);
  switch (action.type) {
    case 'CREATE_BABYFOOT_SUCCESSFULLY':
      return [
       ...state,...action.babyFoot
      ];
    // case 'CREATE_BABYFOOT_FAILED':
    //   return Object.assign({}, state, {
    //     error: action.error
    //   });
    case 'GET_ALL_BABYFOOT_SUCCESSFULLY':
      return [
       ...action.babyFoot
      ];
    // case 'GET_ALL_BABYFOOT_FAILED' :
    //   return Object.assign({}, state, {
    //     error: action.error
    //   });
    // case 'REMOVE_BABYFOOT':
    //   return Object.assign({}, state, {
    //     babyFootArray: undefined,
    //   });
    default:
      return state;
  }
};