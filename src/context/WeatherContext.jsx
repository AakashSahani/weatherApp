import React from 'react';
import { createContext, useState } from 'react';
import weatherData from '../data/WeatherData';
import currentData from '../data/currentData';
import { useGeolocated } from 'react-geolocated';
import PropTypes from 'prop-types';

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
	const [weather, setWeather] = useState(weatherData);
	const [todayWeather, setTodayWeather] = useState(currentData);

	const { coords } = useGeolocated({
		positionOptions: { enableHighAccuracy: false },
		userDecisionTimeout: 5000,
	});
	const getDailyWeather = async () => {
		if (coords != undefined) {
			await fetch(
				`https://api.open-meteo.com/v1/forecast?latitude=${coords.latitude}&longitude=${coords.longitude}&daily=weathercode,windspeed_10m_max&current_weather=true&timezone=GMT`
			)
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					setWeather(data);
				});
		} else {
			console.log('Fetching Data...');
		}
	};

	return (
		<WeatherContext.Provider
			value={{
				coords,
				getDailyWeather,
				weather,
				todayWeather,
				setTodayWeather,
			}}
		>
			{children}
		</WeatherContext.Provider>
	);
};

WeatherProvider.propTypes = {
	children: PropTypes.any,
};

export default WeatherContext;
