import React from 'react';

function WeatherNav({ menu }) {
	return (
		<div
			className={
				menu
					? 'z-20 absolute top-0 left-0 min-h-screen w-full border-2 border-white'
					: 'hidden'
			}
		>
			<form className={'flex flex-col w-full'}>
				<div className="w-full flex justify-between p-5">
					<input
						type="text"
						name="location"
						id="location"
						placeholder="Search for places"
						className="bg-gray-300 text-white p-2"
						// onClick={handleClick}
					/>
					<button type="Submit" className="bg-bgBtn p-2 rounded">
						Submit
					</button>
				</div>
			</form>
			<ul className="flex flex-col z-10">
				<li className="location ">London</li>
				<li className="location">Barcelona</li>
				<li className="location">Long Beach</li>
			</ul>
		</div>
	);
}

export default WeatherNav;
