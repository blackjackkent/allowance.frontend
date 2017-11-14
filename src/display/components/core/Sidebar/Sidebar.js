import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import HeaderLinks from '../Header/HeaderLinks';
import AppRoutes from '../../../../routes/routes';
const routes = new AppRoutes();

const propTypes = {
	location: PropTypes.shape({
		pathname: PropTypes.string
	}).isRequired
};
class Sidebar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			width: window.innerWidth
		};
	}
	componentDidMount() {
		this.updateDimensions();
		window.addEventListener('resize', this.updateDimensions.bind(this));
	}
	activeRoute(routeName) {
		return this.props.location.pathname.indexOf(routeName) > -1 ? 'active' : '';
	}
	updateDimensions() {
		this.setState({ width: window.innerWidth });
	}
	render() {
		const { user } = this.props;
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
						{this.state.width <= 991 ? (<HeaderLinks user={user} />) : null}
						{
							routes.getRoutes().map((prop) => {
								if (!prop.redirect) {
									return (
										<li className={prop.upgrade ? 'active active-pro' : this.activeRoute(prop.path)} key={prop.path}>
											<NavLink to={prop.path} className="nav-link" activeClassName="active">
												<i className={`fa ${prop.icon}`} />
												<p>{prop.name}</p>
											</NavLink>
										</li>
									);
								}
								return null;
							})
						}
					</ul>
				</div>
			</div>
		);
	}
}
Sidebar.propTypes = propTypes;
export default Sidebar;
