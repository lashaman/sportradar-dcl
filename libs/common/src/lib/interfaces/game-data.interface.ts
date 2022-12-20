import {GameDetails} from "./game-details.interface";

/**
 * create generic interface for game data
 * @field {number} sourceId - id of the source
 * @field {GameDetails} game - game object with all the game data
 */
export interface GameData {
  sourceId: string;
  game: GameDetails;
}
