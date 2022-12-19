import {StatisticsDiscrepanciesInterface} from "@sportradar-dcl/common";
import BuildTsxFromDiscrepanciesObjUtil from "../utils/build-tsx-from-discrepancies-obj.util";

interface DisplayStatisticsDiscrepanciesInterface {
  statisticsDiscrepancies: StatisticsDiscrepanciesInterface;
}

const displayStatisticsDiscrepancies: React.FC<DisplayStatisticsDiscrepanciesInterface> = (statisticsDiscrepancies: DisplayStatisticsDiscrepanciesInterface) => {
  return (
    <div>
      {BuildTsxFromDiscrepanciesObjUtil(statisticsDiscrepancies.statisticsDiscrepancies)}
    </div>
  );
}

export default displayStatisticsDiscrepancies;
