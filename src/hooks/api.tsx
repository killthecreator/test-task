import {
  getCovidCasesByDate,
  getCovidStatsByCountry,
  getCovidWorldwideStats,
} from "./../api";

import { useQuery } from "@tanstack/react-query";

/* Making all different api calls as separate custom hooks */

export const useGetCovidCasesByDate = () =>
  useQuery({
    queryKey: ["bydate"],
    queryFn: getCovidCasesByDate,
  });

export const useGetCovidWorldwideStats = () =>
  useQuery({
    queryKey: ["worldwide"],
    queryFn: getCovidWorldwideStats,
  });

export const useGetCovidStatsByCountry = () =>
  useQuery({
    queryKey: ["byCountry"],
    queryFn: getCovidStatsByCountry,
  });
