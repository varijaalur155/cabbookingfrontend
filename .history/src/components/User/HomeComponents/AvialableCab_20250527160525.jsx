"use client";

import React from "react";

const cabs = [
	{
		name: "Prime SUV",
		img: "https://cdn.pixabay.com/photo/2017/04/06/22/11/car-2209439_640.png",
		desc: "SUVs With free wifi and top drivers",
		time: "1 min",
	},
	{
		name: "Auto",
		img: "https://cdn.pixabay.com/photo/2016/03/27/19/40/auto-rickshaw-1283612_640.jpg",
		desc: "Affordable auto rides",
		time: "2 min",
	},
	{
		name: "Mini",
		img: "https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_640.jpg",
		desc: "Mini cars for short trips",
		time: "3 min",
	},
	{
		name: "Bike",
		img: "https://cdn.pixabay.com/photo/2013/07/12/15/55/motorbike-150978_640.png",
		desc: "Quick bike rides",
		time: "2 min",
	},
	{
		name: "Prime Sedan",
		img: "https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_640.jpg",
		desc: "Sedans for comfortable rides",
		time: "4 min",
	},
];

const AvialableCab = () => (
	<div>
		{cabs.map((cab, idx) => (
			<div
				key={idx}
				className="flex items-center border rounded-md py-2 px-5 cursor-pointer mb-2"
			>
				<div>
					<img className="w-7" src={cab.img} alt={cab.name} />
					<p className="font-semibold text-xs">{cab.time}</p>
				</div>
				<div className="pl-5 text-sm">
					<p className="font-semibold">{cab.name}</p>
					<p className="text-xs">{cab.desc}</p>
				</div>
			</div>
		))}
	</div>
);

export default AvialableCab;