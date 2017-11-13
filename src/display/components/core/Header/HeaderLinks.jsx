import React, { Component } from 'react';
import { NavItem, Nav, NavDropdown, MenuItem } from 'react-bootstrap';


class HeaderLinks extends Component {
	render() {
		const { user } = this.props;
		return (
			<div>
				<Nav pullRight>
					<NavItem>{user ? user.email : ''}</NavItem>
					<NavItem href="#">Log out</NavItem>
				</Nav>
			</div>
		);
	}
}

export default HeaderLinks;
