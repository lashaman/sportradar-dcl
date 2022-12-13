import {GameDetails} from "./game-details.interface";

/**
 * create Interface Player
 * @field {string} id - id of the player
 * @field {number} yards - number of yards
 */
export interface Player {
  id: string;
  yards: number;
}
/**
 * create Interface for player rushing extends Player
 * @field {number} attempts - number of attempts
 * @field {number} touchdowns - number of touchdowns
 */
export interface PlayerRushing extends Player {
  attempts: number;
  touchdowns: number;
}

/**
 * create Interface for Playr receiving extends Player
 * @field {number} receptions - number of receptions
 */
export interface PlayerReceiving extends Player {
  receptions: number;
}

/**
 * create Inteface for totals
 * @field {number} yards - number of yards
 */
export interface Totals {
  yards: number;
}

/**
 * create Interface for totalsRushing extends Totals
 * @field {number} attempts - number of attempts
 * @field {number} touchdowns - number of touchdowns
 */
export interface TotalsRushing extends Totals {
  attempts: number;
  touchdowns: number;
}

/**
 * create Interface totals receiving extends Totals
 * @field {number} receptions - number of receptions
 * @field {yards} yards - number of yards
 */
export interface TotalsReceiving extends Totals {
  receptions: number;
}

/**
 * create Interface for rushing
 * @field {TotalsRushing} totals - totals of the team
 * @field {PlayerRushing[]} PlayerRushing - players of the team
 */
export interface Rushing {
  totals: TotalsRushing;
  players: PlayerRushing[];
}

/**
 * create Interface for receiving
 * @field {TotalsReceiving} totals - totals of the team
 * @field {PlayerReceiving[]} PlayerReceiving - players of the team
 */
export interface Receiving {
  totals: TotalsReceiving;
  players: PlayerReceiving[];
}

/**
 * create @interface for team
 * @field {string} id - id of the team
 * @field {Rushing} rushing - rushing of the team
 * @field {Receiving} receiving - receiving of the team
 */
export interface Team {
  id: string;
  rushing: Rushing;
  receiving: Receiving;
}

/**
 * create @interface for statistics
 * @field {Team} home - home team
 * @field {Team} away - away team
 */
export interface Statistics {
  home: Team;
  away: Team;
}
/**
 * create Interface for local game
 * @field {string} sourceId - id of the source
 * @field {game} game - game object with all the game data
 * @field {statistics} statistics - statistics object with all the statistics data
 */
export interface LocalGame {
  sourceId: string;
  game: GameDetails;
  statistics: Statistics;
}
