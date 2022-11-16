import React from 'react';
import Card from './layout/Card';

function WeatherToday() {
	return (
		<div className="weather-today">
			<h2>Today's Highlights</h2>
			<div className="grid">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
}

export default WeatherToday;
