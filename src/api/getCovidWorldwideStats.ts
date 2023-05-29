import axios from "axios";

/* Type for returning object from https://disease.sh/v3/covid-19/all endpoint */
export type CovidWorldwideStats = {
  updated: number;
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  todayRecovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
  population: number;
  oneCasePerPeople: number;
  oneDeathPerPeople: number;
  oneTestPerPeople: number;
  activePerOneMillion: number;
  recoveredPerOneMillion: number;
  criticalPerOneMillion: number;
  affectedCountries: number;
};

export const getCovidWorldwideStats = () => {
  return axios
    .get(`${process.env.REACT_APP_API_BASE_URL}/all`)
    .then((res): CovidWorldwideStats => res.data);
};
