import React from 'react';

function Sidebar() {
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
				<h1>15 °C</h1>
				<p className="day">Sunny</p>
				<div>
					<p>Today . Fri, 18 Nov</p>
					<p>🌈Toronto</p>
				</div>
			</div>
		</aside>
	);
}

export default Sidebar;
