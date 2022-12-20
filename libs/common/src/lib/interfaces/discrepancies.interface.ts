import {GameData} from "./game-data.interface";

export interface Discrepancies {
  local: GameData;
  external: GameData;
}
