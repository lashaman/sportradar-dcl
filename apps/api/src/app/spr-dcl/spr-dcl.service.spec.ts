import SprDclService from "./spr-dcl.service";
import {AllDiscrepanciesModel} from "@sportradar-dcl/common";
import {DiscrepancyTypes} from "@sportradar-dcl/common";

const sprDclService = SprDclService;
test("getDiscrepancies-ALL", () => {
  const result = sprDclService.getDiscrepancies(
    {query: { type: 'ALL'}});
  expect(result).toBeInstanceOf(AllDiscrepanciesModel);
});

test("getDiscrepancies-TEAM", () => {
  const result = sprDclService.getDiscrepancies({query: { type: DiscrepancyTypes.TEAM}});
  expect(result).toBeInstanceOf(AllDiscrepanciesModel);
});

test("getDiscrepancies-PLAYER", () => {
  const result = sprDclService.getDiscrepancies({query: { type: DiscrepancyTypes.PLAYER}});
  expect(result).toBeInstanceOf(AllDiscrepanciesModel);
});



