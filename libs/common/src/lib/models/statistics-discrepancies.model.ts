import {StatisticsDiscrepanciesInterface, StatisticTotalDiscrepancies} from "../interfaces/statistics-discrepancies.interface";

export class StatisticsDiscrepanciesModel implements StatisticsDiscrepanciesInterface {
  homeRushingDiscrepancies: StatisticTotalDiscrepancies;
  homeReceivingDiscrepancies: StatisticTotalDiscrepancies;
  awayRushingDiscrepancies: StatisticTotalDiscrepancies;
  awayReceivingDiscrepancies: StatisticTotalDiscrepancies;

  constructor(homeRushingDiscrepancies: StatisticTotalDiscrepancies,
              homeReceivingDiscrepancies: StatisticTotalDiscrepancies,
              awayRushingDiscrepancies: StatisticTotalDiscrepancies,
              awayReceivingDiscrepancies: StatisticTotalDiscrepancies) {
    this.homeRushingDiscrepancies = homeRushingDiscrepancies;
    this.homeReceivingDiscrepancies = homeReceivingDiscrepancies;
    this.awayRushingDiscrepancies = awayRushingDiscrepancies;
    this.awayReceivingDiscrepancies = awayReceivingDiscrepancies;
  }
}
