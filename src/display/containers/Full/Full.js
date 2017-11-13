import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';

import Dashboard from '../../views/Dashboard';
import Sidebar from '../../components/core/Sidebar/Sidebar';
import Header from '../../components/core/Header/Header';
import Footer from '../../components/core/Footer/Footer';
import appRoutes from '../../../routes/routes.js';

function mapStateToProps(state) {
	return state;
}
class Full extends Component {
	render() {
		return (
			<div className="wrapper">
				<Sidebar {...this.props} />
				<div id="main-panel" className="main-panel">
					<Header {...this.props} />
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

export default connect(mapStateToProps)(Full);
