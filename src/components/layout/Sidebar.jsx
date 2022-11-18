import React, { useState } from 'react';
import weatherData from '../../data/WeatherData';

function Sidebar() {
	const [weather, setWeather] = useState(weatherData);
	// !!! TODO Fix State
	const today = new Date(weather[0].current_weather.time);
	const todayDate = today
		.toDateString()
		.substring(0, today.toDateString().length - 5);
	return (
		<aside>
			<form>
				<input
					type="text"
					name="location"
					id="location"
					placeholder="Search for places"
				/>
				<button>🧭</button>
			</form>
			<div className="current">
				<span>⛅</span>
				<h1>{weather[0].current_weather.temperature} C</h1>
				<p className="day">Sunny</p>
				<div>
					<p>Today . {todayDate}</p>
					<p>🌈Toronto</p>
				</div>
			</div>
		</aside>
	);
}

export default Sidebar;
