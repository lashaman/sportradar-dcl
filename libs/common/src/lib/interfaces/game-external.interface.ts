import {GameDetails} from "./game-details.interface";

/**
 * create @interface for players external
 * @field {string} id - id of the player
 * @field optional {number} rushAttempts - number of rushing attempts
 * @field optional {number} rushTds - number of rushing touchdowns
 * @field optional {number} rushYdsGained - number of rushing yards gained
 * @field optional {number} rec - number of receptions
 * @field optional {number} receivingYards - number of receiving yards
 */
export interface PlayerExternal {
  id: string;
  rushAttempts?: number;
  rushTds?: number;
  rushYdsGained?: number;
  rec?: number;
  receivingYards?: number;
}
/**
 * create @interface external team details
 * @field {string} id - id of the team
 * @field {PlayerExternal[]} players - players of the team
 * @field {number} rushAttempts - number of rushing attempts
 * @field {number} rushTds - number of rushing touchdowns
 * @field {number} rushYdsGained - number of rushing yards gained
 * @field {number} rec - number of receptions
 * @field {number} receivingYards - number of receiving yards
 */
export interface TeamExternalDetails {
  id: string;
  players: PlayerExternal[];
  rushAttempts: number;
  rushTds: number;
  rushYdsGained: number;
  rec: number;
  receivingYards: number;
}
/**
 * create @interface external game @extends GameDetails
 * @field {home: TeamExternalDetails} home - home team
 * @field {away: TeamExternalDetails} away - away team
 */
export interface GameExternalDetails extends GameDetails {
  home: TeamExternalDetails;
  away: TeamExternalDetails;
}

/**
 * create @interace for game external
 * @field {number} sourceId - id of the source
 * @field {GameExternalDetails} game - game object with all the game data
 */
export interface GameExternal {
  sourceId: number;
  game: GameExternalDetails;
}
