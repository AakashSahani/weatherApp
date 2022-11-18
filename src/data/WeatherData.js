const weatherData = [
	{
		latitude: 52.52,
		longitude: 13.419998,
		generationtime_ms: 0.5910396575927734,
		utc_offset_seconds: 0,
		timezone: 'GMT',
		timezone_abbreviation: 'GMT',
		elevation: 38.0,
		current_weather: {
			temperature: 39,
			windspeed: 10.5,
			winddirection: 88.0,
			weathercode: 3,
			time: '2022-11-17T00:00',
		},
		daily_units: {
			time: 'iso8601',
			weathercode: 'wmo code',
			temperature_2m_max: '°F',
			temperature_2m_min: '°F',
			windspeed_10m_max: 'mp/h',
		},
		daily: {
			time: [
				'2022-11-17',
				'2022-11-18',
				'2022-11-19',
				'2022-11-20',
				'2022-11-21',
				'2022-11-22',
				'2022-11-23',
			],
			weathercode: [61, 61, 2, 71, 71, 2, 1],
			temperature_2m_max: [42.6, 36.9, 31.8, 32.9, 33.7, 29.1, 29.1],
			temperature_2m_min: [37.4, 28.7, 25.7, 25.9, 24.6, 22.9, 20.3],
			windspeed_10m_max: [16.1, 11.2, 6.2, 4.0, 6.5, 7.6, 2.9],
		},
	},
];

export default weatherData;
