import {PlayerDiscrepanciesInterface} from "@sportradar-dcl/common";
import {LocalExternalDiscrepanciesInterface} from "../interfaces/local-external-discrepancies.interface";

export class PlayerDiscrepanciesModel implements PlayerDiscrepanciesInterface {
  attempts: LocalExternalDiscrepanciesInterface;
  playerId: string;
  touchdowns: LocalExternalDiscrepanciesInterface;
  yards: LocalExternalDiscrepanciesInterface;
  constructor(playerId: string, touchdowns: LocalExternalDiscrepanciesInterface, yards: LocalExternalDiscrepanciesInterface, attempts: LocalExternalDiscrepanciesInterface) {
    this.playerId = playerId;
    this.touchdowns = touchdowns;
    this.yards = yards;
    this.attempts = attempts;
  }
}
