import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from './Header';
import { toggleMobileSidebar } from '../../../../infrastructure/actions';
import AppRoutes from '../../../../routes/routes';

const routes = new AppRoutes();
const propTypes = {
	dispatch: PropTypes.func.isRequired,
	isMobileSidebarOpen: PropTypes.bool.isRequired,
	location: PropTypes.shape({
		pathname: PropTypes.string
	}).isRequired
};

function mapStateToProps(state) {
	const { ui } = state;
	const {
		isMobileSidebarOpen
	} = ui;
	return {
		isMobileSidebarOpen
	};
}

class HeaderContainer extends Component {
	constructor(props) {
		super(props);
		this.mobileSidebarToggle = this.mobileSidebarToggle.bind(this);
	}

	componentDidMount() {
		this.loadBodyClasses(this.props);
	}

	componentWillReceiveProps(nextProps) {
		this.loadBodyClasses(nextProps);
	}

	loadBodyClasses(props) {
		document.body.classList.toggle('nav-open', props.isMobileSidebarOpen);
	}

	mobileSidebarToggle() {
		const { dispatch } = this.props;
		dispatch(toggleMobileSidebar());
	}

	render() {
		return (
			<Header
				{...this.props}
				mobileSidebarToggle={this.mobileSidebarToggle}
				brand={routes.getBrandFromPath(this.props.location.pathname)}
			/>
		);
	}
}

HeaderContainer.propTypes = propTypes;
export default connect(mapStateToProps)(HeaderContainer);
