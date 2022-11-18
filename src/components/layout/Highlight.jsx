import React from 'react';

function Highlight({ weatherInfo, title }) {
	return (
		<div className="highlight">
			<p>{title}</p>
			<h3>{weatherInfo}</h3>
		</div>
	);
}

export default Highlight;
