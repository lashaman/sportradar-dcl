import {LocalExternalDiscrepanciesInterface} from "./local-external-discrepancies.interface";

export interface GameDiscrepanciesInterface {
  gameId: string;
  attendanceDiscrepancies: LocalExternalDiscrepanciesInterface;
}
