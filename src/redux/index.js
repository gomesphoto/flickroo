import { combineReducers } from 'redux';
import { photosReducer } from './_photos';

export default combineReducers({
  photos: photosReducer
});
