import SprDclService from "./spr-dcl.service";

export class SprDclController {
  constructor() {}

  getDiscrepancies(req,res): object {
    return SprDclService.getDiscrepancies(req,res);
  }
}
