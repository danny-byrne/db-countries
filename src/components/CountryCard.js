import React from "react";

const CountryCard = ({ country }) => {
  const { name, capital, population, area, flag, continent } = country;
  return (
    <div className="w-40 h-10 bg-gray-100 text-black border-zinc-700 rounded">
      {name}
    </div>
  );
};

export default CountryCard;
