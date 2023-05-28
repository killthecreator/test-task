import Graph from "./../components/ChartsNMaps/Graph";
import Map from "./../components/ChartsNMaps/Map";

export const ChartsNMaps = () => {
  return (
    <div className="flex flex-col gap-10">
      <Graph />
      <Map />
    </div>
  );
};
