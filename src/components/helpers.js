export const parseCountryData = (country) => {
  const capital = country?.capital?.length ? country.capital[0] : "";

  return {
    name: country.name.common,
    capital: capital,
    population: country.population,
    area: country.area,
    flag: country.flags.svg,
    continent: country.continents[0],
  };
};
