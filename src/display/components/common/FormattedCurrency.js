import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

const propTypes = {
	value: PropTypes.number.isRequired
};
const FormattedCurrency = props => (
	<NumberFormat
		decimalScale={2}
		value={props.value ? props.value : ''}
		displayType="text"
		thousandSeparator={true}
		prefix="$"
		renderText={value => <span>{value}</span>}
	/>
);

FormattedCurrency.propTypes = propTypes;
export default FormattedCurrency;
