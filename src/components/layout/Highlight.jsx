import React from 'react';
import PropTypes from 'prop-types';

function Highlight({ weatherInfo, title }) {
	return (
		<div className="highlight">
			<p>{title}</p>
			<h3>{weatherInfo}</h3>
		</div>
	);
}

Highlight.propTypes = {
	weatherInfo: PropTypes.number,
	title: PropTypes.string,
};

export default Highlight;
