import {GameDetails, GameExternalDetails, LocalGame, Statistics, TeamExternalDetails} from "@sportradar-dcl/common";
import {StatisticsModel} from "./statistics.model";
import {LocalGameDetailsModel} from "./local-game-details.model";

export class LocalGameModel implements LocalGame {
  sourceId: string;
  game: GameDetails;
  statistics: Statistics;

  constructor(sourceId: string, game: GameExternalDetails) {
    this.sourceId = sourceId;
    this.game = new LocalGameDetailsModel(game.id, game.attendance);
    this.statistics = new StatisticsModel(game.home, game.away);
  }

}
