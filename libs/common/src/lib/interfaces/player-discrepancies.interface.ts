import {Player} from "./game-local.interface";
import {LocalExternalDiscrepanciesInterface} from "./local-external-discrepancies.interface";

export interface PlayerDiscrepanciesInterface {
  playerId: string;
  touchdowns?: LocalExternalDiscrepanciesInterface;
  yards?: LocalExternalDiscrepanciesInterface;
  attempts?: LocalExternalDiscrepanciesInterface;
}


export interface PlayerRushingReceivingDiscrepancies {
  teamId?: string;
  localReceivingPlayerDiscrepancies: PlayerDiscrepanciesInterface[];
  localRushingPlayerDiscrepancies: PlayerDiscrepanciesInterface[];
}
