import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import PropTypes from 'prop-types';

import HeaderLinks from './HeaderLinks';
import AppRoutes from '../../../../routes/routes';
const routes = new AppRoutes();

const propTypes = {
	user: PropTypes.shape({
		id: PropTypes.string
	}).isRequired,
	location: PropTypes.shape({
		pathname: PropTypes.string
	}).isRequired
};

class Header extends Component {
	constructor(props) {
		super(props);
		this.mobileSidebarToggle = this.mobileSidebarToggle.bind(this);
		this.state = {
			sidebarExists: false
		};
	}
	mobileSidebarToggle(e) {
		if (this.state.sidebarExists === false) {
			this.setState({
				sidebarExists: true
			});
		}
		e.preventDefault();
		document.documentElement.classList.toggle('nav-open');
		const node = document.createElement('div');
		node.id = 'bodyClick';
		node.onclick = function toggleSidebar() {
			this.parentElement.removeChild(this);
			document.documentElement.classList.toggle('nav-open');
		};
		document.body.appendChild(node);
	}
	render() {
		const { user, location } = this.props;
		return (
			<Navbar fluid={true}>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="/">{routes.getBrandFromPath(location.pathname)}</a>
					</Navbar.Brand>
					<Navbar.Toggle onClick={this.mobileSidebarToggle} />
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
