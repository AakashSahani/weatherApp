import React from 'react';
import Weather from './components/Weather';
import { WeatherProvider } from './context/WeatherContext';
import Sidebar from './components/layout/Sidebar';

function App() {
	return (
		<WeatherProvider>
			<div className="app">
				<Sidebar />
				<Weather />
			</div>
		</WeatherProvider>
	);
}

export default App;
