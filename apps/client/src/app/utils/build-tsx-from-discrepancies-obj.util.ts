import buildIterables from "../components/build-iterables";

const buildTsxFromDiscrepanciesObj = (statisticsDiscrepancies: Object) => {
  console.log("buildTsxFromDiscrepanciesObj", statisticsDiscrepancies);
  const statistics = [];
  for(const [key, value] of Object.entries(statisticsDiscrepancies)) {
    statistics.push(buildIterables(value, key))
  }
  return statistics;
}

export default buildTsxFromDiscrepanciesObj;
