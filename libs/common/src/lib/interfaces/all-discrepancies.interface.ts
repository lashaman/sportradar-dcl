import {GameDiscrepanciesInterface} from "./game-discrepancies.interface";
import {StatisticsDiscrepanciesInterface, StatisticTotalDiscrepancies} from "./statistics-discrepancies.interface";
import {PlayerRushingReceivingDiscrepancies} from "@sportradar-dcl/common";

export interface AllDiscrepanciesInterface {
  gameDiscrepancies?: GameDiscrepanciesInterface;
  statisticsDiscrepancies?: StatisticsDiscrepanciesInterface;
  homePlayersDiscrepancies?: PlayerRushingReceivingDiscrepancies;
  awayPlayersDiscrepancies?: PlayerRushingReceivingDiscrepancies;
}

export type DiscrepancyDisplay = GameDiscrepanciesInterface | StatisticsDiscrepanciesInterface | PlayerRushingReceivingDiscrepancies;
