"use client";

import React from "react";

const cabData = [
  {
    name: "Prime SUV",
    description: "SUVs With free wifi and top drivers",
    img: "https://cdn.pixabay.com/photo/2017/04/06/22/11/car-2209439_640.png",
  },
  {
    name: "Auto",
    description: "Affordable rides for short distances",
    img: "https://cdn.pixabay.com/photo/2013/07/12/13/58/tuk-tuk-147804_640.png",
  },
  {
    name: "Mini",
    description: "Small cars at pocket-friendly fares",
    img: "https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_640.jpg",
  },
  {
    name: "Bike",
    description: "Quick rides for one at low cost",
    img: "https://cdn.pixabay.com/photo/2016/04/01/09/11/motorcycle-1300160_640.png",
  },
  {
    name: "Prime Sedan",
    description: "Spacious sedans with top-rated drivers",
    img: "https://cdn.pixabay.com/photo/2013/07/12/14/04/car-147821_640.png",
  },
];

const AvialableCab = () => {
  return (
    <div>
      {cabData.map((cab, index) => (
        <div
          key={index}
          className="flex items-center border rounded-md py-2 px-5 cursor-pointer mb-2"
        >
          <div>
            <img className="w-7" src={cab.img} alt={cab.name} />
            <p className="font-semibold text-xs">1 min</p>
          </div>

          <div className="pl-5 text-sm">
            <p className="font-semibold">{cab.name}</p>
            <p className="text-xs">{cab.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvialableCab;

