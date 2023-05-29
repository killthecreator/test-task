import axios from "axios";

/* Type for returning object from https://disease.sh/v3/covid-19/historical/all?lastdays=all endpoint */
export type CovidCasesByDate = Record<string, string>;

export const getCovidCasesByDate = () => {
  return axios
    .get(`${process.env.REACT_APP_API_BASE_URL}/historical/all?lastdays=all`)
    .then((res): CovidCasesByDate => res.data);
};
