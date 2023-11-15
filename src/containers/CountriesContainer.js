"use client";
import React from "react";
import { useCountryAndFilterData } from "../hooks/useCountryAndFilterData";
import CountryCard from "../components/CountryCard";

const CountriesContainer = () => {
  const { countries, selectedCountry } = useCountryAndFilterData();

  console.log({ countries });
  return (
    <div className="h-screen w-screen bg-teal-200">
      <div className="flex flex-col gap-4 ">
        {countries.map((country) => (
          <CountryCard key={country.name} country={country} />
        ))}
      </div>
    </div>
  );
};

export default CountriesContainer;
