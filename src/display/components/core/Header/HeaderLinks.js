import React from 'react';
import { NavItem, Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';

const propTypes = {
	user: PropTypes.shape({
		id: PropTypes.string
	}).isRequired
};
const HeaderLinks = (props) => {
	const { user } = props;
	return (
		<div>
			<Nav pullRight={true}>
				<NavItem>{user ? user.email : ''}</NavItem>
				<NavItem href="#">Log out</NavItem>
			</Nav>
		</div>
	);
};
HeaderLinks.propTypes = propTypes;
export default HeaderLinks;
