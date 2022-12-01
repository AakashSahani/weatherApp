import React from 'react';
import PropTypes from 'prop-types';

function Card({ code, time }) {
	// WMO Weather interpretation codes (WW)
	// Code 	Description
	// 0 	Clear sky
	// 1, 2, 3 	Mainly clear, partly cloudy, and overcast
	// 45, 48 	Fog and depositing rime fog
	// 51, 53, 55 	Drizzle: Light, moderate, and dense intensity
	// 56, 57 	Freezing Drizzle: Light and dense intensity
	// 61, 63, 65 	Rain: Slight, moderate and heavy intensity
	// 66, 67 	Freezing Rain: Light and heavy intensity
	// 71, 73, 75 	Snow fall: Slight, moderate, and heavy intensity
	// 77 	Snow grains
	// 80, 81, 82 	Rain showers: Slight, moderate, and violent
	// 85, 86 	Snow showers slight and heavy

	// !!TODO Clean up function
	const weatherInterp = (code) => {
		switch (code) {
			case 0:
			case 1:
			case 2:
			case 3:
				return handleCodeOne(code);
			// break;
			case 45:
			case 48:
				return handleCodeFour(code);
			// break;
			case 51:
			case 53:
			case 55:
			case 56:
			case 57:
				return handleCodeFive(code);
			// break;
			case 61:
			case 63:
			case 65:
			case 66:
			case 67:
				return handleCodeSix(code);
			// break;
			case 71:
			case 73:
			case 75:
			case 77:
				return handleCodeSeven(code);
			// break;
			case 80:
			case 81:
			case 82:
			case 85:
			case 86:
				return handleCodeEight(code);
			// break;
			default:
				return 'No Info';
		}
	};

	const handleCodeOne = (code) => {
		switch (code) {
			case 0:
				return '☀️';
			case 1:
				return '🌤️';
			case 2:
				return '⛅';
			case 3:
				return '☁️';
			default:
				return 'No info';
		}
	};

	const handleCodeFour = (code) => {
		switch (code) {
			case 45:
				return 'Clear sky';
			case 48:
				return 'Mainly clear';
			default:
				return 'No info';
		}
	};

	const handleCodeFive = (code) => {
		switch (code) {
			case 51:
				return 'Clear sky';
			case 53:
				return 'Mainly clear';
			case 55:
				return 'partly cloudy';
			case 56:
				return 'overcast';
			case 57:
				return 'overcast';
			default:
				return 'No info';
		}
	};

	const handleCodeSix = (code) => {
		switch (code) {
			case 61:
				return 'Clear sky';
			case 63:
				return 'Mainly clear';
			case 65:
				return 'partly cloudy';
			case 66:
				return 'overcast';
			case 67:
				return 'overcast';
			default:
				return 'No info';
		}
	};

	const handleCodeSeven = (code) => {
		switch (code) {
			case 71:
				return 'Clear sky';
			case 73:
				return 'Mainly clear';
			case 75:
				return 'partly cloudy';
			case 77:
				return 'overcast';
			default:
				return 'No info';
		}
	};

	const handleCodeEight = (code) => {
		switch (code) {
			case 80:
				return '☀️';
			case 81:
				return '🌤️';
			case 82:
				return '⛅';
			case 85:
				return '☁️';
			case 86:
				return '☁️';
			default:
				return 'No info';
		}
	};

	return (
		<div className="card">
			<span>{time}</span>
			{/* <p>🌦️</p> */}
			<p className="interp">{weatherInterp(code)}</p>
			<span>18 °C</span>
		</div>
	);
}

Card.propTypes = {
	code: PropTypes.number,
	time: PropTypes.string,
};

export default Card;
