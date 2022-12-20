import SprDclService from "./spr-dcl.service";

export class SprDclController {
  constructor() {}

  getDiscrepancies(req,res): object {
    const response = SprDclService.getDiscrepancies(req);
    return res.status(200).send(response);
  }
}
