import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const propTypes = {
	bigIcon: PropTypes.node.isRequired,
	statsText: PropTypes.string.isRequired,
	statsValue: PropTypes.node.isRequired
};
const StatsCard = props => (
	<div className="card card-stats">
		<div className="content">
			<Row>
				<Col xs={5}>
					<div className="icon-big text-center icon-warning">
						{props.bigIcon}
					</div>
				</Col>
				<Col xs={7}>
					<div className="numbers">
						<p>{props.statsText}</p>
						{props.statsValue}
					</div>
				</Col>
			</Row>
		</div>
	</div>
);

StatsCard.propTypes = propTypes;
export default StatsCard;
