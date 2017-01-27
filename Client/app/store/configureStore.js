/**
 * Created by Margot on 07/01/2017.
 */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  return applyMiddleware(thunk)(createStore)(rootReducer, initialState);
}
