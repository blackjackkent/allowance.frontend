import { take, put, call } from 'redux-saga/effects';
import axios from 'axios';

import {
	FETCH_BUDGET,
	fetchedBudgetSuccess
} from '../../actions';

export default function* fetchBudgetSaga() {
	yield take(FETCH_BUDGET);
	const response = yield call(axios.get, 'http://localhost:3001/budget');
	yield put(fetchedBudgetSuccess(response.data));
}
