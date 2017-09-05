import { combineReducers } from 'redux';
import likesReducer from './likesReducer';
import songReducer from './songReducer';
import modalReducer from './modalCheckReducer';


export default combineReducers({
	likes: likesReducer,
	songs: songReducer,
	modalView: modalReducer,
});
