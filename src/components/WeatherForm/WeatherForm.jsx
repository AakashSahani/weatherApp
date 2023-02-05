import React from 'react';
import { useState } from 'react';
import WeatherNav from './WeatherNav';

function WeatherForm() {
	const [text, setText] = useState('');
	const [menu, setMenu] = useState(false);

	const handleClick = (e) => {
		e.preventDefault();
		setMenu((menu) => !menu);
		console.log('Aaaaah!!!! I was clicked');
	};
	return (
		<section className="bg-bgMain min-h-screen text-white flex flex-col items-center text-center">
			<div className={menu ? 'hidden' : 'z-10'}>
				<form className="w-full z-0 p-3 flex justify-between">
					<input
						type="text"
						name="location"
						id="location"
						placeholder="Search for places"
						className="bg-gray-300 text-white p-2"
						onClick={handleClick}
					/>
					<button type="button" className="text-3xl">
						👺
					</button>
				</form>
				<ul className="z-0">
					<li>🌦️</li>
					<li>15C</li>
					<li>Shower</li>
					<li>Today . Fri, 5 Jun</li>
					<li>🤖 Helsinki</li>
				</ul>
			</div>
			<WeatherNav menu={menu} />
		</section>
	);
}

export default WeatherForm;
