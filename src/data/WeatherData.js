const weatherData = [
	{
		coord: {
			lon: -79.2735,
			lat: 43.7378,
		},
		weather: [
			{
				id: 501,
				main: 'Rain',
				description: 'moderate rain',
				icon: '10n',
			},
		],
		base: 'stations',
		main: {
			temp: 272.85,
			feels_like: 267.23,
			temp_min: 270.52,
			temp_max: 275.5,
			pressure: 1020,
			humidity: 87,
		},
		visibility: 10000,
		wind: {
			speed: 6.17,
			deg: 100,
			gust: 10.8,
		},
		rain: {
			'1h': 1.33,
		},
		clouds: {
			all: 100,
		},
		dt: 1668567407,
		sys: {
			type: 2,
			id: 2009209,
			country: 'CA',
			sunrise: 1668514291,
			sunset: 1668549127,
		},
		timezone: -18000,
		id: 6141899,
		name: 'Scarborough Junction',
		cod: 200,
	},
];

export default weatherData;
