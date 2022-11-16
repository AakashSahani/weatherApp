import React from 'react';
import WeatherWeek from './WeatherWeek';
import WeatherToday from './WeatherToday';

function Weather() {
	return (
		<main>
			<WeatherWeek />
			<WeatherToday />
		</main>
	);
}

export default Weather;
