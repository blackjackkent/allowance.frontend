import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NumberFormat from 'react-number-format';

import ManagementDataTableRow from './managementDataTableRow.jsx';

const StyledControlRow = styled.div`
	width: 100%; 
	background: #586F7C;
	height: 65px;
	padding: 10px;
	margin-bottom: 20px;
	a, button {
		display: inline-block;
		padding: 10px 30px;
		background: #fff;
		height: 45px;
		line-height: 25px;
		color: #586F7C;
		margin-right: 20px;
		border-radius: 10px;
		&:hover {
			background: #2F4550;
			color: #fff;
			text-decoration: none;
		}
		&.disabled {
			background: #dedee3;
			color: #94a3ab;
		}
		border:none;
	}
	.hidden { display: none; }
`;

class ManagementControlRow extends Component {
	render() {
		return (
			<StyledControlRow>
				<Link to={"/add-transaction/" + this.props.transactionType}>New <i className="fa fa-plus-circle"></i></Link>
				<button className={(this.props.isDeleteDisabled ? '' : 'disabled')} onClick={this.props.onDeleteRows}>Delete Selected <i className="fa fa-times-circle"></i></button>
				<img src="/img/loading.gif" className={(this.props.isLoading) ? '' : 'hidden'} />
			</StyledControlRow>
		);
	}
}

export default ManagementControlRow;
