import {PlayerDiscrepanciesInterface, PlayerRushingReceivingDiscrepancies} from "@sportradar-dcl/common";

export class PlayerRushingReceivingDiscrepanciesModel implements PlayerRushingReceivingDiscrepancies {
  teamId: string;
  localReceivingPlayerDiscrepancies: PlayerDiscrepanciesInterface[];
  localRushingPlayerDiscrepancies: PlayerDiscrepanciesInterface[];

  constructor(teamId: string, localReceivingPlayerDiscrepancies: PlayerDiscrepanciesInterface[], localRushingPlayerDiscrepancies: PlayerDiscrepanciesInterface[]) {
    this.teamId = teamId;
    this.localReceivingPlayerDiscrepancies = localReceivingPlayerDiscrepancies;
    this.localRushingPlayerDiscrepancies = localRushingPlayerDiscrepancies;
  }
}
