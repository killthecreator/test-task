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
import Loading from "../loading";
import { useGetCovidCasesByDate } from "~/hooks/api";

/* Function to convert cases value to more short exponential notation */
const toExp = (value: string | number) => Number(value).toExponential(2);

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

/* Options object for Graph */
const options = {
  responsive: true,
  redraw: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "COVID-19 Cases",
    },
  },
  scales: {
    y: {
      ticks: {
        callback: toExp,
      },
    },
  },
};

const CasesLineGraph = () => {
  const { data, isLoading } = useGetCovidCasesByDate();

  /* Handling case if data was not loaded. Either loading spinner or message with error */
  if (!data) {
    return (
      <div className="flex flex-col justify-center items-center aspect-[920/460] gap-10">
        <p> {isLoading ? "Loading graph" : "Data was not found"}</p>
        {isLoading && <Loading />}
      </div>
    );
  }

  const labels = Object.keys(data.cases);
  const dataOutput = Object.values(data.cases);
  const cases = {
    labels,
    datasets: [
      {
        data: window.innerWidth > 500 ? dataOutput : dataOutput.map(toExp),
        fill: false,
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: window.innerWidth > 500 ? 7 : 2,
        pointRadius: 0,
        tension: 0.01,
      },
    ],
  };

  return (
    <div className="m-auto max-w-[1000px] w-[99%] aspect-square sm:aspect-video">
      <Line options={options} data={cases} />
    </div>
  );
};

export default CasesLineGraph;
