import { combineReducers } from 'redux';
import user from './user';
import budget from './budget';
import ui from './ui';

export default combineReducers({
	user,
	budget,
	ui
});
