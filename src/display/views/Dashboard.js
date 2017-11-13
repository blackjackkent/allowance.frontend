import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';
import { Grid, Row, Col } from 'react-bootstrap';
import StatsCard from '../components/core/StatsCard/StatsCard';


class Dashboard extends Component {
	render() {
		return (
			<div className="content">
				<Grid fluid>
					<Row>
						<Col xs={12}>
							<div className="dashboard-summary-header card">
								<div className="content all-icons">
									<h2>For the remainder of the month, you can spend $22.30 per day!</h2>
								</div>
							</div>
						</Col>
					</Row>
					<Row>
						<Col lg={3} sm={6}>
							<StatsCard
								bigIcon={<i className="fa fa-dollar text-info savings-card-icon"></i>}
								statsText="Planned Savings"
								statsValue="600"
							/>
						</Col>
						<Col lg={3} sm={6}>
							<StatsCard
								bigIcon={<i className="fa fa-refresh text-info bills-card-icon"></i>}
								statsText="Scheduled Bills"
								statsValue="2000"
							/>
						</Col>
						<Col lg={3} sm={6}>
							<StatsCard
								bigIcon={<i className="fa fa-arrow-circle-o-down text-info expenses-card-icon"></i>}
								statsText="Expenses So Far"
								statsValue="500"
							/>
						</Col>
						<Col lg={3} sm={6}>
							<StatsCard
								bigIcon={<i className="fa fa-arrow-circle-o-up text-info income-card-icon"></i>}
								statsText="Expected Income"
								statsValue="500"
							/>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}

export default Dashboard;
