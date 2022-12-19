import {StatisticTotalDiscrepancies} from "../interfaces/statistics-discrepancies.interface";
import {LocalExternalDiscrepanciesInterface} from "../interfaces/local-external-discrepancies.interface";

export class StatisticsTotalDiscrepanciesModel implements StatisticTotalDiscrepancies {
  id: string;
  yards: LocalExternalDiscrepanciesInterface;
  attempts: LocalExternalDiscrepanciesInterface;
  touchdowns: LocalExternalDiscrepanciesInterface;

  constructor(id: string, yards: LocalExternalDiscrepanciesInterface, attempts: LocalExternalDiscrepanciesInterface, touchdowns: LocalExternalDiscrepanciesInterface) {
    this.id = id;
    this.yards = yards;
    this.attempts = attempts;
    this.touchdowns = touchdowns;
  }
}
