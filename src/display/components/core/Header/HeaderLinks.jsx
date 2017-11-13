import React, { Component } from 'react';
import { NavItem, Nav, NavDropdown, MenuItem } from 'react-bootstrap';


class HeaderLinks extends Component {
	render() {
		return (
			<div>
				<Nav pullRight>
					<NavItem>rosalind.m.wills@gmail.com</NavItem>
					<NavItem href="#">Log out</NavItem>
				</Nav>
			</div>
		);
	}
}

export default HeaderLinks;
