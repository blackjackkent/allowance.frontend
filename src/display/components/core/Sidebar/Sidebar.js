import React from 'react';
import PropTypes from 'prop-types';

import HeaderLinks from '../Header/HeaderLinks';

const propTypes = {
	user: PropTypes.shape({
		id: PropTypes.string
	}).isRequired,
	routeLinks: PropTypes.node.isRequired
};
const Sidebar = (props) => {
	const { user, routeLinks } = props;
	return (
		<div id="sidebar" className="sidebar" data-color="black">
			<div className="sidebar-background" />
			<div className="logo">
				<a href="/" className="simple-text logo-normal">
					Allowance
				</a>
			</div>
			<div className="sidebar-wrapper">
				<ul className="nav">
					<div className="hidden-lg hidden-md">
						<HeaderLinks user={user} />
					</div>
					{routeLinks}
				</ul>
			</div>
		</div>
	);
};
Sidebar.propTypes = propTypes;
export default Sidebar;
