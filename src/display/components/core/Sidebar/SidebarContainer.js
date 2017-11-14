import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Sidebar from './Sidebar';
import AppRoutes from '../../../../routes/routes';

const routes = new AppRoutes();
const propTypes = {
	location: PropTypes.shape({
		pathname: PropTypes.string
	}).isRequired
};

class SidebarContainer extends Component {
	constructor(props) {
		super(props);
		this.buildRouteLinks = this.buildRouteLinks.bind(this);
		this.buildRouteLink = this.buildRouteLink.bind(this);
		this.activeRoute = this.activeRoute.bind(this);
	}
	buildRouteLinks() {
		const routeLinks = routes.getRoutes().map(prop => this.buildRouteLink(prop));
		return routeLinks;
	}
	buildRouteLink(prop) {
		const activeRoute = this.activeRoute(prop.path);
		if (!prop.redirect) {
			return (
				<li className={prop.upgrade ? 'active active-pro' : activeRoute} key={prop.path}>
					<NavLink to={prop.path} className="nav-link" activeClassName="active">
						<i className={`fa ${prop.icon}`} />
						<p>{prop.name}</p>
					</NavLink>
				</li>
			);
		}
		return null;
	}
	activeRoute(routeName) {
		return this.props.location.pathname.indexOf(routeName) > -1 ? 'active' : '';
	}
	render() {
		return (
			<Sidebar
				{...this.props}
				brand={routes.getBrandFromPath(this.props.location.pathname)}
				routeLinks={this.buildRouteLinks()}
			/>
		);
	}
}
SidebarContainer.propTypes = propTypes;
export default SidebarContainer;
