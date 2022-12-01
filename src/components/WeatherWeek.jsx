import React, { useContext, useEffect } from 'react';
import Card from './layout/Card';
import WeatherContext from '../context/WeatherContext';

function WeatherWeek() {
	const { weather, getDailyWeather } = useContext(WeatherContext);
	useEffect(() => {
		getDailyWeather();
	}, []);

	return (
		<div className="weather-week">
			{weather[0].daily.time.map((day, index) => (
				<Card
					key={index}
					code={weather[0].daily.weathercode[index]}
					time={day}
				/>
			))}
		</div>
	);
}

export default WeatherWeek;
