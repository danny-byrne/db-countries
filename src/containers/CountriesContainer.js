"use client";
import React from "react";
import { useCountryAndFilterData } from "../hooks/useCountryAndFilterData";
import CountryCard from "../components/CountryCard";

const CountriesContainer = () => {
  const { countries, selectedCountry } = useCountryAndFilterData();

  console.log({ countries });
  return (
    <div className="h-full w-screen bg-teal-200 text-gray-800 ">
      <div className="flex flex-col gap-4 place-items-center ">
        <div className="text-3xl mt-6">Countries of the World</div>
        {countries.map((country) => (
          <CountryCard key={country.name} country={country} />
        ))}
      </div>
    </div>
  );
};

export default CountriesContainer;
