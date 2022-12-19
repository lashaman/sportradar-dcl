import {LocalExternalDiscrepanciesInterface} from "./local-external-discrepancies.interface";

export interface StatisticTotalDiscrepancies {
  id: string;
  yards: LocalExternalDiscrepanciesInterface;
  attempts: LocalExternalDiscrepanciesInterface;
  touchdowns: LocalExternalDiscrepanciesInterface;
}
export interface StatisticsDiscrepanciesInterface {
  homeRushingDiscrepancies: StatisticTotalDiscrepancies;
  homeReceivingDiscrepancies: StatisticTotalDiscrepancies;
  awayRushingDiscrepancies: StatisticTotalDiscrepancies;
  awayReceivingDiscrepancies: StatisticTotalDiscrepancies;
}
