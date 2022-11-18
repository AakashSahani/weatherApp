import React from 'react';
import Card from './layout/Card';

function WeatherWeek() {
	return (
		<div className="weather-week">
			<Card code={1} />
			<Card code={2} />
			<Card code={0} />
			<Card code={3} />
			<Card code={2} />
		</div>
	);
}

export default WeatherWeek;
