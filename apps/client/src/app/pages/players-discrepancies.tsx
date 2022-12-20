import {DiscrepancyTypes, Player, PlayerRushingReceivingDiscrepancies} from "@sportradar-dcl/common";
import React, {useEffect, useState} from "react";
import GetDiscrepanciesService from "../services/get-discrepancies.service";
import DisplayPlayerDiscrepancies from "../containers/display-player-discrepancies";
import Typography from "@mui/material/Typography";

const PlayersDiscrepancies = (): React.ReactElement => {
  const [players, setPlayers] = useState<any>({});
  useEffect(
    () => {
      GetDiscrepanciesService
        .getDiscrepancies(DiscrepancyTypes.PLAYER)
        .then((discrepancies: any) => {
          console.log('discrepancies', discrepancies);
            setPlayers(discrepancies);
      }, (error) => {

      })
    }, []
  )
  return (
    <div>
      <div>
        <Typography
          sx={{flex: '1 1 100%'}}
          variant="h5"
          id="tableTitle"
          component="div"
        >
          Home Players discrepancies
        </Typography>
        {players && players.homePlayersDiscrepancies && (
          <DisplayPlayerDiscrepancies
            playersDiscrepancies={players.homePlayersDiscrepancies}
          />)}

        <Typography
          sx={{flex: '1 1 100%'}}
          variant="h5"
          id="tableTitle"
          component="div"
        >
          Away Players discrepancies
        </Typography>
        {players && players.awayPlayersDiscrepancies && (
          <DisplayPlayerDiscrepancies
            playersDiscrepancies={players.awayPlayersDiscrepancies}
          />)}
      </div>
    </div>
  );
};

export default PlayersDiscrepancies;
