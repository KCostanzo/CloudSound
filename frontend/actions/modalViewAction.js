import Constants from '../constants/allConstants';

export const modalViewed = () => dispatch => (
	dispatch({
		type: Constants.MODAL_VIEWED,
		payload: "COOL"
	})
);