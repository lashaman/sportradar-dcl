import {
  AllDiscrepanciesInterface,
  GameDiscrepanciesModel,
  PlayerRushingReceivingDiscrepanciesModel,
  StatisticsDiscrepanciesModel
} from "@sportradar-dcl/common";

export class AllDiscrepanciesModel implements AllDiscrepanciesInterface {
  gameDiscrepancies: GameDiscrepanciesModel | undefined;
  statisticsDiscrepancies: StatisticsDiscrepanciesModel | undefined;
  homePlayersDiscrepancies: PlayerRushingReceivingDiscrepanciesModel | undefined;
  awayPlayersDiscrepancies: PlayerRushingReceivingDiscrepanciesModel | undefined;

  constructor(gameDiscrepancies?: GameDiscrepanciesModel, statisticsDiscrepancies?: StatisticsDiscrepanciesModel, homePlayersDiscrepancies?: PlayerRushingReceivingDiscrepanciesModel, awayPlayersDiscrepancies?: PlayerRushingReceivingDiscrepanciesModel) {
    this.gameDiscrepancies = gameDiscrepancies;
    this.statisticsDiscrepancies = statisticsDiscrepancies;
    this.homePlayersDiscrepancies = homePlayersDiscrepancies;
    this.awayPlayersDiscrepancies = awayPlayersDiscrepancies;
  }
}
