"use client";
import React, { useState } from "react";
import { useCountryAndFilterData } from "../hooks/useCountryAndFilterData";
import CountryCard from "../components/CountryCard";
import Modal from "../components/Modal";

const CountriesContainer = () => {
  const { countries, selectedCountry, setSelectedCountry } =
    useCountryAndFilterData();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="h-full w-screen bg-teal-200 text-gray-800 ">
        <div className="flex flex-col gap-4 place-items-center ">
          <div className="text-3xl mt-6">Countries of the World</div>
          {countries.map((country, index) => (
            <CountryCard
              key={country.name}
              country={country}
              onClick={() => setSelectedCountry(countries[index])}
            />
          ))}
        </div>
      </div>
      <Modal />
    </>
  );
};

export default CountriesContainer;
