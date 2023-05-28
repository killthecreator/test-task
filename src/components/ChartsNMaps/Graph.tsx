import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

import { useQuery } from "@tanstack/react-query";
import { getCasesByDate } from "./../../api";
import Loading from "../loading";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "COVID-19 Cases",
    },
  },
};

const Graph = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["bydate"],
    queryFn: getCasesByDate,
  });

  if (!data) {
    return (
      <div className="flex flex-col justify-center items-center aspect-[920/460] gap-10">
        <p> {isLoading ? "Loading graph" : "Data was not found"}</p>
        {isLoading && <Loading />}
      </div>
    );
  }

  const labels = Object.keys(data.cases);
  const cases = {
    labels,
    datasets: [
      {
        data: Object.values(data.cases),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div className="p-10 m-auto max-w-[1000px] w-full">
      <Line options={options} data={cases} />
    </div>
  );
};

export default Graph;
