import { BBSData } from "../types/types";
import BBSCard from "./BBSCard";

interface BBSAllDataProps {
  bbsAllData: BBSData[];
}

function BBSCardList({ bbsAllData }: BBSAllDataProps) {
  return (
    <div className="grid lg:grid-cols-3 px-4 py-4 gap-4">
      {bbsAllData.map((bbsData) => (
        <BBSCard key={bbsData.id} bbsData={bbsData} />
      ))}
    </div>
  );
}

export default BBSCardList;
