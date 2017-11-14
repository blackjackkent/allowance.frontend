import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Dashboard from '../../views/Dashboard';
import Sidebar from '../../components/core/Sidebar/Sidebar';
import HeaderContainer from '../../components/core/Header/HeaderContainer';
import Footer from '../../components/core/Footer/Footer';
import { fetchUser } from '../../../infrastructure/actions';


const propTypes = {
	dispatch: PropTypes.func.isRequired,
	user: PropTypes.shape({
		id: PropTypes.string
	}).isRequired
};
function mapStateToProps(state) {
	const {
		user
	} = state;
	return {
		user
	};
}
class Full extends Component {
	componentDidMount() {
		const { dispatch } = this.props;
		if (!this.props.user || !this.props.user.id) {
			dispatch(fetchUser());
		}
	}
	render() {
		return (
			<div className="wrapper">
				<Sidebar {...this.props} />
				<div id="main-panel" className="main-panel">
					<HeaderContainer {...this.props} />
					<Switch>
						<Route path="/dashboard" name="Dashboard" component={Dashboard} />
						<Redirect from="/" to="/dashboard" />
					</Switch>
					<Footer />
				</div>
			</div>
		);
	}
}

Full.propTypes = propTypes;
export default connect(mapStateToProps)(Full);
