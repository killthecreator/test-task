import axios from "axios";

export const getCasesByDate = () => {
  return axios
    .get(`${process.env.REACT_API_BASE_URL}/all`)
    .then((res) => res.data);
};
