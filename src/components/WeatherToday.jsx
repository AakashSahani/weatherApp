import React, { useState } from 'react';
import currentData from '../data/currentData';
import Highlight from './layout/Highlight';

function WeatherToday() {
	const [weather, setWeather] = useState(currentData);
	return (
		<div className="weather-today">
			<h2>Today's Highlights</h2>
			<div className="grid">
				<Highlight weatherInfo={weather.wind.speed} title="Wind Status" />
				<Highlight weatherInfo={weather.main.temp} title="Temperature" />
				<Highlight weatherInfo={weather.main.pressure} title="Pressure" />
				<Highlight weatherInfo={weather.main.humidity} title="Humidity" />
			</div>
		</div>
	);
}

export default WeatherToday;
