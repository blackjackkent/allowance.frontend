import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import PropTypes from 'prop-types';

import HeaderLinks from './HeaderLinks';

const propTypes = {
	user: PropTypes.shape({
		id: PropTypes.string
	}).isRequired,
	location: PropTypes.shape({
		pathname: PropTypes.string
	}).isRequired
};

class Header extends Component {
	render() {
		const { user, brand, mobileSidebarToggle } = this.props;
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
	}
}
Header.propTypes = propTypes;
export default Header;
