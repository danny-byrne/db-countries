import React from "react";
import Image from "next/image";

const FLAG_WIDTH = 120;
const FLAG_HEIGHT = (3 / 5) * FLAG_WIDTH;

const CountryCard = ({ country }) => {
  const { name, capital, population, area, flag, continent } = country;
  return (
    <div className="w-80 h-20 bg-gray-100 text-black border-zinc-700 rounded">
      {name}
      <Image src={flag} width={FLAG_HEIGHT} height={FLAG_WIDTH} />
    </div>
  );
};

export default CountryCard;
