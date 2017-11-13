export const FETCHED_BUDGET_SUCCESS = 'FETCHED_BUDGET_SUCCESS';
export function fetchedBudgetSuccess(data) {
	return {
		type: FETCHED_BUDGET_SUCCESS,
		data
	};
}
