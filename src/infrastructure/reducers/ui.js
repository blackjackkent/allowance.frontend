import { TOGGLE_MOBILE_SIDEBAR } from '../actions';

function ui(state = {
	isMobileSidebarOpen: false
}, action) {
	switch (action.type) {
		case TOGGLE_MOBILE_SIDEBAR:
			return Object.assign({}, state, {
				isMobileSidebarOpen: !state.isMobileSidebarOpen
			});
		default:
			return state;
	}
}

export default ui;
