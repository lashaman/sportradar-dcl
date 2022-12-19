import {Team, TeamExternalDetails} from "../interfaces";

/**
 * function to map the statistics
 * Mapping external {externalTeamData} data to external {Team} data according to {MapStatistics} Map
 */
export function mapStatistics(externalTeamData: TeamExternalDetails): Team {
  const mappedTeam: Team = {
    id: externalTeamData.id,
    rushing: {
      totals: {
        attempts: externalTeamData.rushAttempts,
        touchdowns: externalTeamData.rushTds,
        yards: externalTeamData.rushYdsGained,
      },
      players: [],
    },
    receiving: {
      totals: {
        receptions: externalTeamData.rec,
        yards: externalTeamData.receivingYards,
      },
      players: [],
    },
  };

  externalTeamData.players.forEach((player) => {
    const mappedRushPlayer = {
        id: player.id,
        attempts: player.rushAttempts || 0,
        touchdowns: player.rushTds || 0,
        yards: player.rushYdsGained || 0,
    };

    const mappedReceivePlayer = {
        id: player.id,
        receptions: player.rec || 0,
        yards: player.receivingYards || 0,
    }

    mappedTeam.rushing.players.push(mappedRushPlayer);
    mappedTeam.receiving.players.push(mappedReceivePlayer);
  });

  return mappedTeam;
}
