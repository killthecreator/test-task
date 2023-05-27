import axios from "axios";

export const getAll = () => {
  return axios
    .get(`${process.env.REACT_APP_API_BASE_URL}/all`)
    .then((res) => res.data);
};
