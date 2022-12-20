import path from "path";
import {
  AllDiscrepanciesInterface,
  DiscrepancyTypes, findDiscrepanciesInArray,
  findDiscrepanciesInObjects,
  GameDetails,
  GameExternal, GameExternalDetails, LocalGame,
  PlayerRushingReceivingDiscrepanciesModel, Statistics, Team
} from "@sportradar-dcl/common";
import {GameDiscrepanciesInterface} from "@sportradar-dcl/common";
import {StatisticsDiscrepanciesInterface} from "@sportradar-dcl/common";
import {GameDiscrepanciesModel} from "@sportradar-dcl/common";
import {StatisticsDiscrepanciesModel} from "@sportradar-dcl/common";
import {readJsonFile} from "./utils/read-json.util";
import {AllDiscrepanciesModel} from "../../../../../libs/common/src/lib/models/all-discrepancies.model";
import {LocalGameModel} from "../../../../../libs/common/src/lib/models/local-game.model";


class SprDclService {
  static instance: SprDclService;
 static getInstance () {
    if(!SprDclService.instance) {
      return new SprDclService();
    }
    return SprDclService.instance;
  }
  compareGameDiscrepancies(localGameData: GameDetails, externalGameData: GameExternalDetails): GameDiscrepanciesInterface {
    if (localGameData.id === externalGameData.id) {
      if (localGameData.attendance !== externalGameData.attendance) {
        return new GameDiscrepanciesModel(localGameData.id, localGameData.attendance, externalGameData.attendance);
      }
    }
  }

  compareStatisticsDiscrepancies(localStatistics: Statistics, externalStatistics: Statistics): StatisticsDiscrepanciesInterface {
    const localHomeRushingTotals = localStatistics.home.rushing.totals;
    const localHomeReceivingTotals = localStatistics.home.receiving.totals;
    const externalHomeRushingTotals = externalStatistics.home.rushing.totals;
    const externalHomeReceivingTotals = externalStatistics.home.receiving.totals;
    const localAwayRushingTotals = localStatistics.away.rushing.totals;
    const localAwayReceivingTotals = localStatistics.away.receiving.totals;
    const externalAwayRushingTotals = externalStatistics.away.rushing.totals;
    const externalAwayReceivingTotals = externalStatistics.away.receiving.totals;
    let homeRushingDiscrepancies;
    let homeReceivingDiscrepancies;
    let awayRushingDiscrepancies;
    let awayReceivingDiscrepancies;
    if (localStatistics.home.id === externalStatistics.home.id) {
      homeRushingDiscrepancies = {id: localStatistics.home.id, ...findDiscrepanciesInObjects(localHomeRushingTotals, externalHomeRushingTotals)};
      homeReceivingDiscrepancies = {id: localStatistics.home.id, ...findDiscrepanciesInObjects(localHomeReceivingTotals, externalHomeReceivingTotals)};
    }
    if (localStatistics.away.id === externalStatistics.away.id) {
      awayRushingDiscrepancies = {id: localStatistics.away.id, ...findDiscrepanciesInObjects(localAwayRushingTotals, externalAwayRushingTotals)};
      awayReceivingDiscrepancies = {id: localStatistics.away.id, ...findDiscrepanciesInObjects(localAwayReceivingTotals, externalAwayReceivingTotals)};
    }
    return new StatisticsDiscrepanciesModel(homeReceivingDiscrepancies, homeRushingDiscrepancies, awayReceivingDiscrepancies, awayRushingDiscrepancies);
  }

  comparePlayersDiscrepancies(localTeam: Team, externalTeam: Team): PlayerRushingReceivingDiscrepanciesModel {
    if (localTeam.id === externalTeam.id) {
      const localRushingPlayers = localTeam.rushing.players;
      const localReceivingPlayers = localTeam.receiving.players;
      const externalRushingPlayers = externalTeam.rushing.players;
      const externalReceivingPlayers = externalTeam.receiving.players;
      const localRushingPlayerDiscrepancies = findDiscrepanciesInArray(localRushingPlayers, externalRushingPlayers);
      const localReceivingPlayerDiscrepancies = findDiscrepanciesInArray(localReceivingPlayers, externalReceivingPlayers);
      return new PlayerRushingReceivingDiscrepanciesModel(localTeam.id, localRushingPlayerDiscrepancies, localReceivingPlayerDiscrepancies);
    }
  }

  /**
   * create function that maps external game data to local game data with the function mapStatistics
   * @param {GameExternal} externalGameData - external game data
   * @returns {LocalGame} localGameData - local game data
   */
  mapExternalGameData(externalGameData: GameExternal): LocalGame {
    return new LocalGameModel(externalGameData.sourceId, externalGameData.game);
  }

  getDiscrepancies(req): AllDiscrepanciesInterface {
    const type = req.query.type;
    const sr = readJsonFile(path.join('C:/Users/lasha/Documents/smm_exercise', 'sr.json'), 'utf-8', (err, data) => {
      if (err) {
      }
      return data;
    });
    const external = readJsonFile(path.join('C:/Users/lasha/Documents/smm_exercise', 'external.json'), 'utf-8', (err, data) => {
      if (err) {
      }
      return this.mapExternalGameData(data);
    });
    let returnObject: AllDiscrepanciesInterface = {} as AllDiscrepanciesInterface;
    switch (type) {
      case DiscrepancyTypes.GAME:
        returnObject = new AllDiscrepanciesModel(this.compareGameDiscrepancies(external.game, sr.game));
        break;
      case DiscrepancyTypes.TEAM:
        returnObject = new AllDiscrepanciesModel(
          null,
          this.compareStatisticsDiscrepancies(sr.statistics, external.statistics)
        );
        break;
      case DiscrepancyTypes.PLAYER:
        returnObject = new AllDiscrepanciesModel(
          null,
          null,
          this.comparePlayersDiscrepancies(sr.statistics.home, external.statistics.home),
          this.comparePlayersDiscrepancies(sr.statistics.away, external.statistics.away)
        );
        break;
      default:
        returnObject = new AllDiscrepanciesModel(
          this.compareGameDiscrepancies(sr.game, external.game),
          this.compareStatisticsDiscrepancies(sr.statistics, external.statistics),
          this.comparePlayersDiscrepancies(sr.statistics.home, external.statistics.home),
          this.comparePlayersDiscrepancies(sr.statistics.away, external.statistics.away)
        );
    }

    return returnObject;
  }
}
export default SprDclService.getInstance();
