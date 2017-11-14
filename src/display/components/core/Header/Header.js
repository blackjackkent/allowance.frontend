import React from 'react';
import { Navbar } from 'react-bootstrap';
import PropTypes from 'prop-types';

import HeaderLinks from './HeaderLinks';

const propTypes = {
	user: PropTypes.shape({
		id: PropTypes.string
	}).isRequired,
	brand: PropTypes.string.isRequired,
	mobileSidebarToggle: PropTypes.func.isRequired
};

const Header = (props) => {
	const { user, brand, mobileSidebarToggle } = props;
	return (
		<Navbar fluid={true}>
			<Navbar.Header>
				<Navbar.Brand>
					<a href="/">{brand}</a>
				</Navbar.Brand>
				<Navbar.Toggle onClick={mobileSidebarToggle} />
				<a href="/transaction/add" className="btn btn-success">Record Transaction</a>
			</Navbar.Header>
			<Navbar.Collapse>
				<HeaderLinks user={user} />
			</Navbar.Collapse>
		</Navbar>
	);
};
Header.propTypes = propTypes;
export default Header;
