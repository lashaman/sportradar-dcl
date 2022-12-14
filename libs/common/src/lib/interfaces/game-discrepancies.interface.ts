import {GameData} from "./game-data.interface";

export interface GameDiscrepancies {
  local: GameData;
  external: GameData;
}
