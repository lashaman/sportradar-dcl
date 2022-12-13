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

class SprDclService {
  compareGameDiscrepancies(localGameData: GameDetails, externalGameData: GameExternalDetails): object {
    if (localGameData.id === externalGameData.id) {
      if(localGameData.attendance !== externalGameData.attendance) {
        return {attendance: {local: localGameData.attendance, external: externalGameData.attendance}};
      }
    }
  }

  /**
   * create function that maps external game data to local game data with the function mapStatistics
   * @param {GameExternal} externalGameData - external game data
   * @returns {LocalGame} localGameData - local game data
   */
  mapExternalGameData(externalGameData: GameExternal): LocalGame {
  }
  getDiscrepancies(req, res): object {
    const sr = readJsonFile(path.join('C:/Users/lasha/Documents/smm_exercise', 'sr.json'), 'utf-8', (err, data) => {
      if (err) {
      }
      return data;
    });
    const external = readJsonFile(path.join('C:/Users/lasha/Documents/smm_exercise', 'external.json'), 'utf-8', (err, data) => {
      if (err) {
      }
      return data;
    });
    const gameDiscrepancies = this.compareGameDiscrepancies(sr.game, external.game);
    return res.status(200).send({sr, external});
  }
}

export default new SprDclService();
