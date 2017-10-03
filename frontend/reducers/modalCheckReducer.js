import Constants from '../constants/allConstants.js';
import merge from 'lodash/merge';

const modalReducer = (state = {modalBool: false, errors: []}, action) => {
	switch (action.type) {
		case Constants.MODAL_VIEWED:
			console.log("modal viewed");
			let newState = merge({}, state);

			newState.modalBool = true;
			return newState;
		default: 
			return state;
	}
}


export default modalReducer;