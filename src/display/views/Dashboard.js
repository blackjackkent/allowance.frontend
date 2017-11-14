import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import StatsCard from '../components/dashboard/StatsCard/StatsCard';
import DashboardSummaryHeader from '../components/dashboard/DashboardSummaryHeader/DashboardSummaryHeader';
import { fetchBudget } from '../../infrastructure/actions';
import FormattedCurrency from '../components/common/FormattedCurrency';


const propTypes = {
	dispatch: PropTypes.func.isRequired,
	budget: PropTypes.shape({
		id: PropTypes.string
	}).isRequired
};
function mapStateToProps(state) {
	const {
		budget
	} = state;
	return {
		budget
	};
}
class Dashboard extends Component {
	componentDidMount() {
		const { dispatch } = this.props;
		if (!this.props.budget || !this.props.budget.id) {
			dispatch(fetchBudget());
		}
	}
	render() {
		const { budget } = this.props;
		return (
			<div className="content">
				<Grid fluid={true}>
					<Row>
						<Col xs={12}>
							<DashboardSummaryHeader remainingSpendPerDay={budget.remainingSpendPerDay} />
						</Col>
					</Row>
					<Row>
						<Col lg={3} sm={6}>
							<StatsCard
								bigIcon={<i className="fa fa-dollar text-info savings-card-icon" />}
								statsText="Planned Savings"
								statsValue={<FormattedCurrency value={budget.monthlySavings} />}
							/>
						</Col>
						<Col lg={3} sm={6}>
							<StatsCard
								bigIcon={<i className="fa fa-refresh text-info bills-card-icon" />}
								statsText="Scheduled Bills"
								statsValue={<FormattedCurrency value={budget.monthlyBills} />}
							/>
						</Col>
						<Col lg={3} sm={6}>
							<StatsCard
								bigIcon={<i className="fa fa-arrow-circle-o-down text-info expenses-card-icon" />}
								statsText="Expenses So Far"
								statsValue={<FormattedCurrency value={budget.monthlyExpenses} />}
							/>
						</Col>
						<Col lg={3} sm={6}>
							<StatsCard
								bigIcon={<i className="fa fa-arrow-circle-o-up text-info income-card-icon" />}
								statsText="Expected Income"
								statsValue={<FormattedCurrency value={budget.monthlyIncome} />}
							/>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}
Dashboard.propTypes = propTypes;
export default connect(mapStateToProps)(Dashboard);
