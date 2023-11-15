"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic"; // Import dynamic
const REST_COUNTRIES_ENDPOINT = "https://restcountries.com/v3.1/all";
import { parseCountryData } from "./helpers";

const CountryFilter = () => {
  const [countries, setCountries] = useState([]);
  //   const [selectedCountry, setSelectedCountry] = useState("");
  //   const [showFilters, setShowFilters] = useState(true);
  //   const [population, setPopulation] = useState("");
  //   const [squareMile, setSquareMile] = useState("");
  //   const [gdp, setGDP] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(REST_COUNTRIES_ENDPOINT);

      if (response.ok) {
        const data = await response.json();
        // console.log({ data });
        const parsedCountries = data.map((country) => {
          return parseCountryData(country);
        });
        // console.log({ parsedCountries });
        setCountries(parsedCountries);
      } else {
        console.error(
          "Error fetching countries:",
          response.status,
          response.statusText
        );
      }
    };

    fetchData();
  }, []);

  //   useEffect(() => {
  //     console.log({ countries });
  //   }, [countries]);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleFilterToggle = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div>
      Hello
      {/* <label>
        Select a country:
        <select value={selectedCountry} onChange={handleCountryChange}>
          <option value="">-- No Country Selected --</option>
          {countries.map((country) => (
            <option key={country.cca2} value={country.cca2}>
              {country.name.common}
            </option>
          ))}
        </select>
      </label>

      <button onClick={handleFilterToggle}>
        {showFilters ? "Hide Filters" : "Show Filters"}
      </button>

      {showFilters && (
        <div>
          <label>
            Population:
            <input
              type="number"
              value={population}
              onChange={(e) => setPopulation(e.target.value)}
            />
          </label>

          <label>
            Square Mile:
            <input
              type="number"
              value={squareMile}
              onChange={(e) => setSquareMile(e.target.value)}
            />
          </label>

          <label>
            GDP:
            <input
              type="number"
              value={gdp}
              onChange={(e) => setGDP(e.target.value)}
            />
          </label>
        </div>
      )} */}
    </div>
  );
};

export default CountryFilter;
