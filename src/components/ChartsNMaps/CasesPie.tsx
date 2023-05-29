import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import Loading from "../loading";
import { useGetCovidWorldwideStats } from "./../../hooks/api";

ChartJS.register(ArcElement, Tooltip, Legend);

const CasesPie = () => {
  const { data, isLoading } = useGetCovidWorldwideStats();

  /* Handling case if data was not loaded. Either loading spinner or message with error */
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
        data: [data.deaths, data.recovered],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="m-auto w-full grid sm:grid-cols-[auto_auto] justify-center items-center gap-3">
      <div className="flex flex-col gap-5">
        <p className="font-bold">Worldwide stats</p>
        <div className="flex flex-col  gap-3 w-max">
          <span>{`Total cases: ${data.cases}`}</span>
          <span>{`Total deaths: ${data.deaths}`}</span>
          <span>{`Total recovered: ${data.recovered}`}</span>
        </div>
      </div>

      <div className="flex justify-center max-w-[500px]">
        <Pie data={cases} />
      </div>
    </div>
  );
};

export default CasesPie;
