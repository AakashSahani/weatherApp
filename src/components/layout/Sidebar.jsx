import React, { useContext } from 'react';
import WeatherContext from '../../context/WeatherContext';

function Sidebar() {
	const { todayWeather } = useContext(WeatherContext);
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('get daily weather');
	};

	return (
		<aside>
			<form onSubmit={handleSubmit}>
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
				<h1>
					{/* {todayWeather.main.temp} */}
					Hello
				</h1>
				<p className="day">Sunny</p>
				<div>
					<p>Today {Date(todayWeather.dt)}</p>
					<p>🌈Toronto</p>
				</div>
			</div>
		</aside>
	);
}

export default Sidebar;
