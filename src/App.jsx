import Weather from './components/Weather';
import Sidebar from './components/layout/Sidebar';

function App() {
	return (
		<div className="app">
			<Sidebar />
			<Weather />
		</div>
	);
}

export default App;
