import React from "react";

const CountryCard = ({ country }) => {
  const { name, capital, population, area, flag, continent } = country;
  return <div className="w-90 h-300 bg-gray-100">{name}</div>;
};

export default CountryCard;
