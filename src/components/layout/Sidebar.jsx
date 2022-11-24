import React, { useContext } from 'react';
import WeatherContext from '../../context/WeatherContext';

function Sidebar() {
	const { todayWeather, getDaily } = useContext(WeatherContext);
	const handleSubmit = (e) => {
		e.preventDefault();
		getDaily();
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
