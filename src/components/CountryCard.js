import React from "react";
import Image from "next/image";

const FLAG_WIDTH = 120;
const FLAG_HEIGHT = (3 / 5) * FLAG_WIDTH;

import { formatNumberWithCommas } from "../helpers";

const CountryCard = ({ country }) => {
  const { name, capital, population, area, flag, continent } = country;
  const formattedPopulation = formatNumberWithCommas(population);
  const formattedArea = formatNumberWithCommas(area);
  return (
    <div className="w-96 h-24 bg-gray-100 text-black border-zinc-700 rounded pl-3 pt-2 shadow-lg shadow-indigo-500/40 text-gray-800">
      <div className="flex flex-row">
        <div className="flex flex-col w-1/2 text-sm gap-1 ">
          {name}
          <Image src={flag} width={FLAG_HEIGHT} height={FLAG_WIDTH} />
        </div>
        <div className="flex flex-col w-1/2 text-xs pt-1 gap-1">
          <div>Capital: {capital}</div>
          <div>Population: {formattedPopulation}</div>
          <div>Area: {formattedArea} km/sq</div>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
