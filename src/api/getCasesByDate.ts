import axios from "axios";

export const getCasesByDate = () => {
  return axios
    .get(`${process.env.REACT_APP_API_BASE_URL}/historical/all?lastdays=all`)
    .then((res) => res.data);
};
