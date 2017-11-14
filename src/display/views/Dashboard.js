import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NumberFormat from 'react-number-format';

import StatsCard from '../components/core/StatsCard/StatsCard';
import DashboardSummaryHeader from '../components/dashboard/DashboardSummaryHeader/DashboardSummaryHeader';
import { fetchBudget } from '../../infrastructure/actions';


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
								statsValue={
									<NumberFormat
										decimalScale={2}
										value={budget ? budget.monthlySavings : ''}
										displayType="text"
										thousandSeparator={true}
										prefix="$"
										renderText={value => <span>{value}</span>}
									/>
								}
							/>
						</Col>
						<Col lg={3} sm={6}>
							<StatsCard
								bigIcon={<i className="fa fa-refresh text-info bills-card-icon" />}
								statsText="Scheduled Bills"
								statsValue={
									<NumberFormat
										decimalScale={2}
										value={budget ? budget.monthlyBills : ''}
										displayType="text"
										thousandSeparator={true}
										prefix="$"
										renderText={value => <span>{value}</span>}
									/>
								}
							/>
						</Col>
						<Col lg={3} sm={6}>
							<StatsCard
								bigIcon={<i className="fa fa-arrow-circle-o-down text-info expenses-card-icon" />}
								statsText="Expenses So Far"
								statsValue={
									<NumberFormat
										decimalScale={2}
										value={budget ? budget.monthlyExpenses : ''}
										displayType="text"
										thousandSeparator={true}
										prefix="$"
										renderText={value => <span>{value}</span>}
									/>
								}
							/>
						</Col>
						<Col lg={3} sm={6}>
							<StatsCard
								bigIcon={<i className="fa fa-arrow-circle-o-up text-info income-card-icon" />}
								statsText="Expected Income"
								statsValue={
									<NumberFormat
										decimalScale={2}
										value={budget ? budget.monthlyIncome : ''}
										displayType="text"
										thousandSeparator={true}
										prefix="$"
										renderText={value => <span>{value}</span>}
									/>
								}
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
