import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

import { useQuery } from "@tanstack/react-query";
import { getAll } from "../../api";
import Loading from "../loading";
import { DataWorldwide } from "./../../types";

ChartJS.register(ArcElement, Tooltip, Legend);

const CasesPie = () => {
  const { data, isLoading } = useQuery<DataWorldwide>({
    queryKey: ["worldwide"],
    queryFn: getAll,
  });

  if (!data) {
    return (
      <div className="flex flex-col justify-center items-center max-w-[500px] w-full m-auto aspect-square gap-10">
        <p> {isLoading ? "Loading stats" : "Data was not found"}</p>
        {isLoading && <Loading />}
      </div>
    );
  }

  const cases = {
    labels: ["Deaths", "Recovered"],
    datasets: [
      {
        label: "# of Votes",
        data: [data.deaths, data.recovered],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="m-auto max-w-[500px] w-full flex justify-center items-center gap-3">
      <div className="flex flex-col gap-5">
        <p className="font-bold">Worldwide stats</p>
        <div className="flex flex-col  gap-3 w-max">
          <span>{`Total cases: ${data.cases}`}</span>
          <span>{`Total deaths: ${data.deaths}`}</span>
          <span>{`Total recovered: ${data.recovered}`}</span>
        </div>
      </div>

      <Pie data={cases} />
    </div>
  );
};

export default CasesPie;
