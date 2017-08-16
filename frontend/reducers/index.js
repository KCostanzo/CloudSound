import { combineReducers } from 'redux';
import likesReducer from './likesReducer';
import songReducer from './songReducer';


export default combineReducers({
	likes: likesReducer,
	songs: songReducer,
});
