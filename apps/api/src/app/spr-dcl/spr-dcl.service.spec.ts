import SprDclService from "./spr-dcl.service";
import {AllDiscrepanciesModel, DiscrepancyTypes} from "@sportradar-dcl/common";
import {readJsonFile, UTIL_VARS} from "./utils";
import path from "path";

const sprDclService = SprDclService;


describe('SprDclService', () => {
    const sr = readJsonFile(UTIL_VARS.LOCAL_FILE, 'utf-8', (err, data) => {
      if (err) {
      }
      return data;
    });
    const external = readJsonFile(UTIL_VARS.EXTERNAL_FILE, 'utf-8', (err, data) => {
        if (err) {
        }
        return sprDclService.mapExternalGameData(data);
      }
    );
    describe('compareGameDiscrepancies', () => {
        it('should return discrepancies between the game data', () => {
          const discrepancies = sprDclService.compareGameDiscrepancies(sr.game, external.game);
          expect(discrepancies).toHaveProperty('gameId');
          expect(discrepancies).toHaveProperty('attendanceDiscrepancies');
        });
      }
    );
    describe('compareStatisticsDiscrepancies', () => {
        it('should return discrepancies between the statistics data', () => {
          const discrepancies = sprDclService.compareStatisticsDiscrepancies(sr.statistics, external.statistics);
          expect(discrepancies).toHaveProperty('homeRushingDiscrepancies');
          expect(discrepancies).toHaveProperty('homeReceivingDiscrepancies');
          expect(discrepancies).toHaveProperty('awayRushingDiscrepancies');
          expect(discrepancies).toHaveProperty('awayReceivingDiscrepancies');
        });
      }
    );
    describe('comparePlayersDiscrepancies', () => {
        it('should return discrepancies between the players data', () => {
          const discrepancies = sprDclService.comparePlayersDiscrepancies(sr.statistics.home, external.statistics.home);
          expect(discrepancies).toHaveProperty('teamId');
          expect(discrepancies).toHaveProperty('localRushingPlayerDiscrepancies');
          expect(discrepancies).toHaveProperty('localReceivingPlayerDiscrepancies');
        });
      }
    );
    describe('mapExternalGameData', () => {
      it('should return local game data', () => {
        const localGameData = external;
        expect(localGameData).toHaveProperty('sourceId');
        expect(localGameData).toHaveProperty('game');
      });
    } );
    describe('getDiscrepancies', () => {
      it('should return discrepancies between the external and local data', () => {
        const discrepancies = sprDclService.getDiscrepancies({ query: { type: DiscrepancyTypes.ALL } });
        expect(discrepancies).toHaveProperty('gameDiscrepancies');
        expect(discrepancies).toHaveProperty('statisticsDiscrepancies');
        expect(discrepancies).toHaveProperty('homePlayersDiscrepancies');
        expect(discrepancies).toHaveProperty('awayPlayersDiscrepancies');
        expect(discrepancies).toBeInstanceOf(AllDiscrepanciesModel);
      });
    } );

  }
);


