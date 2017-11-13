import { FETCHED_BUDGET_SUCCESS } from '../actions';

function budget(state = {}, action) {
	switch (action.type) {
		case FETCHED_BUDGET_SUCCESS:
			return Object.assign({}, state, action.data);
		default:
			return state;
	}
}

export default budget;
