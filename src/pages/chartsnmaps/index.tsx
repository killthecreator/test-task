import CasesPie from "../../components/ChartsNMaps/CasesPie";
import CasesLineGraph from "../../components/ChartsNMaps/CasesLineGraph";
import Map from "../../components/ChartsNMaps/Map";

/* Layout components for /chartsnmaps route */
export const ChartsNMaps = () => {
  return (
    <div className="flex flex-col gap-10">
      <CasesPie />
      <CasesLineGraph />
      <Map />
    </div>
  );
};
