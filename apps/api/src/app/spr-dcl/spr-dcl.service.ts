import {readJsonFile} from "../../../../../libs/common/src/lib/utils/read-json.util";
import path from "path";
import {
  GameExternal,
  GameExternalDetails,
  LocalGame,
  Statistics, Team,
  TeamExternalDetails
} from "../../../../../libs/common/src/lib/interfaces";
import {GameData} from "../../../../../libs/common/src/lib/interfaces/game-data.interface";
import {GameDetails} from "../../../../../libs/common/src/lib/interfaces/game-details.interface";
import {mapStatistics} from "../../../../../libs/common/src/lib/models/map-statistics";
import {GameDiscrepancies} from "../../../../../libs/common/src/lib/interfaces/game-discrepancies.interface";
import {findDiscrepanciesInArray, findDiscrepanciesInObjects} from "../../../../../libs/common/src/lib/utils/find-discrepancies";
import {DiscrepancyTypes} from "./discrepancy-types.enum";

class SprDclService {
  compareGameDiscrepancies(localGameData: GameDetails, externalGameData: GameExternalDetails): object {
    if (localGameData.id === externalGameData.id) {
      if (localGameData.attendance !== externalGameData.attendance) {
        return {attendance: {local: localGameData, external: externalGameData}};
      }
    }
  }

  compareStatisticsDiscrepancies(localStatistics: Statistics, externalStatistics: Statistics): object {
    const homeRushingTotals = localStatistics.home.rushing.totals;
    const homeReceivingTotals = localStatistics.home.receiving.totals;
    const externalRushingTotals = localStatistics.away.rushing.totals;
    const externalReceivingTotals = localStatistics.away.receiving.totals;
    let homeRushingDiscrepancies;
    let awayRushingDiscrepancies;
    if (localStatistics.home.id === externalStatistics.home.id) {
      homeRushingDiscrepancies = findDiscrepanciesInObjects(homeRushingTotals, externalRushingTotals);
    }
    if (localStatistics.away.id === externalStatistics.away.id) {
      awayRushingDiscrepancies = findDiscrepanciesInObjects(homeReceivingTotals, externalReceivingTotals);
    }
    return {homeRushingDiscrepancies, awayRushingDiscrepancies};
  }

  comparePlayersDiscrepancies(localTeam: Team, externalTeam: Team): object {
    const localRushingPlayers = localTeam.rushing.players;
    const localReceivingPlayers = localTeam.receiving.players;
    const externalRushingPlayers = externalTeam.rushing.players;
    const externalReceivingPlayers = externalTeam.receiving.players;
    let localRushingPlayerDiscrepancies = [];
    let localReceivingPlayerDiscrepancies = [];
    if (localTeam.id === externalTeam.id) {
      localRushingPlayerDiscrepancies = findDiscrepanciesInArray(localRushingPlayers, externalRushingPlayers);
      localReceivingPlayerDiscrepancies = findDiscrepanciesInArray(localReceivingPlayers, externalReceivingPlayers);
    }
    return {localRushingPlayerDiscrepancies, localReceivingPlayerDiscrepancies};

  }

  /**
   * create function that maps external game data to local game data with the function mapStatistics
   * @param {GameExternal} externalGameData - external game data
   * @returns {LocalGame} localGameData - local game data
   */
  mapExternalGameData(externalGameData: GameExternal): LocalGame {
    const localGameData: LocalGame = {
      sourceId: externalGameData.sourceId,
      game: {
        id: externalGameData.game.id,
        attendance: externalGameData.game.attendance
      },
      statistics: {
        home: mapStatistics(externalGameData.game.home),
        away: mapStatistics(externalGameData.game.away),
      }
    }
    return localGameData;
  }

  getDiscrepancies(req, res): object {
    const type = req.query.type;
    console.log('type', type);
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
    let returnObject: any = {};
    switch (type) {
      case DiscrepancyTypes.GAME:
        returnObject.gameDiscrepancies = this.compareGameDiscrepancies(sr.game, external.game);
        break;
      case DiscrepancyTypes.TEAM:
        returnObject.statisticsDiscrepancies = this.compareStatisticsDiscrepancies(sr.statistics, external.statistics);
        break;
      case DiscrepancyTypes.PLAYER:
        returnObject.homePlayersDiscrepancies = this.comparePlayersDiscrepancies(sr.statistics.home, external.statistics.home);
        returnObject.awayPlayersDiscrepancies = this.comparePlayersDiscrepancies(sr.statistics.away, external.statistics.away);
        break;
      default:
        returnObject.gameDiscrepancies = this.compareGameDiscrepancies(sr.game, external.game);
        returnObject.statisticsDiscrepancies = this.compareStatisticsDiscrepancies(sr.statistics, external.statistics);
        returnObject.homePlayersDiscrepancies = this.comparePlayersDiscrepancies(sr.statistics.home, external.statistics.home);
        returnObject.awayPlayersDiscrepancies = this.comparePlayersDiscrepancies(sr.statistics.away, external.statistics.away);

    }

    return res.status(200).send(returnObject);
  }
}

export default new SprDclService();
