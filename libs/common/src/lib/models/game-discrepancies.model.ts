import {GameDiscrepanciesInterface} from "../interfaces/game-discrepancies.interface";
import {LocalExternalDiscrepanciesInterface} from "../interfaces/local-external-discrepancies.interface";
import {LocalExternalDiscrepanciesModel} from "./local-external-discrepancies.model";

export class GameDiscrepanciesModel implements GameDiscrepanciesInterface {
  gameId: string;
  attendanceDiscrepancies: LocalExternalDiscrepanciesInterface;

  constructor(gameId: string, localAttendance: number, externalAttendance: number) {
    this.gameId = gameId;
    this.attendanceDiscrepancies = new LocalExternalDiscrepanciesModel(localAttendance, externalAttendance);
  }
}
