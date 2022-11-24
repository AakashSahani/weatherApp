import React from 'react';
import PropTypes from 'prop-types';

function Card({ code }) {
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
				handleCodeOne(code);
				break;
			case 45:
			case 48:
				handleCodeFour(code);
				break;
			case 51:
			case 53:
			case 55:
			case 56:
			case 57:
				handleCodeFive(code);
				break;
			case 61:
			case 63:
			case 65:
			case 66:
			case 67:
				handleCodeSix(code);
				break;
			case 71:
			case 73:
			case 75:
			case 77:
				handleCodeSeven(code);
				break;
			case 80:
			case 81:
			case 82:
			case 85:
			case 86:
				handleCodeEight(code);
				break;
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
			case 0:
				return 'Clear sky';
			case 1:
				return 'Mainly clear';
			case 2:
				return 'partly cloudy';
			case 3:
				return 'overcast';
			default:
				return 'No info';
		}
	};

	const handleCodeFive = (code) => {
		switch (code) {
			case 0:
				return 'Clear sky';
			case 1:
				return 'Mainly clear';
			case 2:
				return 'partly cloudy';
			case 3:
				return 'overcast';
			default:
				return 'No info';
		}
	};

	const handleCodeSix = (code) => {
		switch (code) {
			case 0:
				return 'Clear sky';
			case 1:
				return 'Mainly clear';
			case 2:
				return 'partly cloudy';
			case 3:
				return 'overcast';
			default:
				return 'No info';
		}
	};

	const handleCodeSeven = (code) => {
		switch (code) {
			case 0:
				return 'Clear sky';
			case 1:
				return 'Mainly clear';
			case 2:
				return 'partly cloudy';
			case 3:
				return 'overcast';
			default:
				return 'No info';
		}
	};

	const handleCodeEight = (code) => {
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

	return (
		<div className="card">
			<span>Tomorrow</span>
			{/* <p>🌦️</p> */}
			<p className="interp">{weatherInterp(code)}</p>
			<span>18 °C</span>
		</div>
	);
}

Card.propTypes = {
	code: PropTypes.number,
};

export default Card;
