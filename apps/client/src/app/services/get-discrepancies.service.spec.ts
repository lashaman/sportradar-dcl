/**
 * create test for GetDiscrepanciesService.getDiscrepancies function
 */
import GetDiscrepanciesService from "./get-discrepancies.service";
import {AllDiscrepanciesModel} from "@sportradar-dcl/common";
import {DiscrepancyTypes} from "@sportradar-dcl/common";
import axios from "axios";

const getDiscrepanciesService = GetDiscrepanciesService;
const getDiscrepanciesService2 = GetDiscrepanciesService;

describe('GetDiscrepanciesService', () => {

  it('should return a singleton instance', () => {
    expect(getDiscrepanciesService).toBe(getDiscrepanciesService2);
  });

  it('should return the data from the GET request', async () => {
    const result = await getDiscrepanciesService.getDiscrepancies(DiscrepancyTypes.ALL);
    expect(result).toHaveProperty('gameDiscrepancies');
    expect(result).toHaveProperty('statisticsDiscrepancies');
    expect(result).toHaveProperty('homePlayersDiscrepancies');
    expect(result).toHaveProperty('awayPlayersDiscrepancies');
  });
});
