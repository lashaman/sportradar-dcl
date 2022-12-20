import {mapStatistics, Statistics, Team, TeamExternalDetails} from "@sportradar-dcl/common";

export class StatisticsModel implements Statistics {
  home: Team;
  away: Team;
  constructor(home: TeamExternalDetails, away: TeamExternalDetails) {
      this.home = mapStatistics(home);
      this.away = mapStatistics(away);
  }
}
