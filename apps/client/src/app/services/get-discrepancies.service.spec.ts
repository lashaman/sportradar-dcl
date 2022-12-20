/**
 * create test for GetDiscrepanciesService.getDiscrepancies function
 */
import GetDiscrepanciesService from "./get-discrepancies.service";
import {AllDiscrepanciesModel} from "@sportradar-dcl/common";
import {DiscrepancyTypes} from "@sportradar-dcl/common";

const getDiscrepanciesService = GetDiscrepanciesService;
describe("getDiscrepancies", () => {
  const result = getDiscrepanciesService.getDiscrepancies(DiscrepancyTypes.ALL);
  expect(result).toBeInstanceOf(AllDiscrepanciesModel);
});
