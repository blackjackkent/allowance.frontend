import React from 'react';
import PropTypes from 'prop-types';

import FormattedCurrency from '../../common/FormattedCurrency';

const propTypes = {
	remainingSpendPerDay: PropTypes.number
};
const defaultProps = {
	remainingSpendPerDay: 0
};
const DashboardSummaryHeader = (props) => {
	const { remainingSpendPerDay } = props;
	return (
		<div className="dashboard-summary-header card">
			<div className="content all-icons">
				<h2>For the remainder of the month, you can
					spend <FormattedCurrency value={remainingSpendPerDay} /> per day!
				</h2>
			</div>
		</div>
	);
};

DashboardSummaryHeader.propTypes = propTypes;
DashboardSummaryHeader.defaultProps = defaultProps;
export default DashboardSummaryHeader;
