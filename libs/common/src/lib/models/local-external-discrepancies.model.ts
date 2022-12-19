import {LocalExternalDiscrepanciesInterface} from "../interfaces/local-external-discrepancies.interface";

export class LocalExternalDiscrepanciesModel implements LocalExternalDiscrepanciesInterface {
  local: number;
  external: number;

  constructor(local: number, external: number) {
    this.local = local;
    this.external = external;
  }
}
