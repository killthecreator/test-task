import axios from "axios";

export const getByCountry = () => {
  return axios
    .get(`${process.env.REACT_APP_API_BASE_URL}/countries`)
    .then((res) => res.data);
};
