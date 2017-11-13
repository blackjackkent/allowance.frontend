import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import PropTypes from 'prop-types';

import HeaderLinks from './HeaderLinks.jsx';

import appRoutes from '../../../../routes/routes.js';


const propTypes = {
	user: PropTypes.shape({
		id: PropTypes.string
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
		var node = document.createElement('div');
		node.id = 'bodyClick';
		node.onclick = function () {
			this.parentElement.removeChild(this);
			document.documentElement.classList.toggle('nav-open');
		};
		document.body.appendChild(node);
	}
	getBrand() {
		var name;
		appRoutes.map((prop, key) => {
			if (prop.collapse) {
				prop.views.map((prop, key) => {
					if (prop.path === this.props.location.pathname) {
						name = prop.name;
					}
					return null;
				})
			} else {
				if (prop.redirect) {
					if (prop.path === this.props.location.pathname) {
						name = prop.name;
					}
				} else {
					if (prop.path === this.props.location.pathname) {
						name = prop.name;
					}
				}
			}
			return null;
		})
		return name;
	}
	render() {
		const { user } = this.props;
		return (
			<Navbar fluid>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="/">{this.getBrand()}</a>
					</Navbar.Brand>
					<Navbar.Toggle onClick={this.mobileSidebarToggle} />

					<a href="#" className='btn btn-success'>Record Transaction</a>
				</Navbar.Header>
				<Navbar.Collapse>
					<HeaderLinks user={user} />
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default Header;
