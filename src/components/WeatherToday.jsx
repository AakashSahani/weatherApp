import React, { useState } from 'react';
import Card from './layout/Card';
import weatherData from '../data/WeatherData';
import Highlight from './layout/Highlight';

function WeatherToday() {
	const [weather, setWeather] = useState(weatherData);
	return (
		<div className="weather-today">
			<h2>Today's Highlights</h2>
			<div className="grid">
				<Highlight
					weatherInfo={weather[0].current_weather.windspeed}
					title="Wind Status"
				/>
				<Highlight
					weatherInfo={weather[0].current_weather.temperature}
					title="Temperature"
				/>
				<Highlight
					weatherInfo={weather[0].current_weather.temperature}
					title="Temperature"
				/>
				<Highlight
					weatherInfo={weather[0].current_weather.temperature}
					title="Temperature"
				/>
			</div>
		</div>
	);
}

export default WeatherToday;
