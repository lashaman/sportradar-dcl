import React, {useEffect, useState} from "react";
import {
  DiscrepancyTypes,
  Discrepancies,
  AllDiscrepanciesInterface,
  LocalExternalDiscrepanciesInterface
} from "@sportradar-dcl/common";
import GetDiscrepanciesService from "../services/get-discrepancies.service";
import DisplayDiscrepancyItem from "../components/display-discrepancy-item";
import DisplayGameDiscrepancies from "../containers/display-game-discrepancies";
import DisplayStatisticsDiscrepancies from "../containers/display-statistics-discrepancies";
import DisplayPlayerDiscrepancies from "../containers/display-player-discrepancies";
import DisplayDiscrepancyWrapper from "../components/display-discrepancy-wrapper";
import Typography from "@mui/material/Typography";
import {Divider} from "@mui/material";

const AllDiscrepancies = (): React.ReactElement => {
  const [allDiscrepancies, setAllDiscrepancies] = useState<AllDiscrepanciesInterface>({});
  useEffect(
    () => {
      GetDiscrepanciesService.getDiscrepancies(DiscrepancyTypes.ALL).then(
        (discrepancies: AllDiscrepanciesInterface) => {
          setAllDiscrepancies(discrepancies);
        }
      );
      return () => {
        setAllDiscrepancies({});
      }
    }, [])
  /**
   * Display all discrepancies
   */
  const {
    gameDiscrepancies,
    statisticsDiscrepancies,
    homePlayersDiscrepancies,
    awayPlayersDiscrepancies
  } = allDiscrepancies;

  return (
    <div>
      <div>
        <Typography
          sx={{flex: '1 1 100%'}}
          variant="h4"
          id="tableTitle"
          component="div"
        >
          Game discrepancies
        </Typography>
        <Divider />
        {gameDiscrepancies?.attendanceDiscrepancies && (
          <DisplayGameDiscrepancies
            gameId={gameDiscrepancies.gameId}
            attendanceDiscrepancies={gameDiscrepancies.attendanceDiscrepancies}
          />)}
      </div>
      <div>
        <Typography
          sx={{flex: '1 1 100%'}}
          variant="h4"
          id="tableTitle"
          component="div"
        >
         Statistics discrepancies
        </Typography>
        <Divider />
        {statisticsDiscrepancies && (
          <DisplayStatisticsDiscrepancies
            statisticsDiscrepancies={statisticsDiscrepancies}
          />)}
      </div>
      <div>
        <Typography
          sx={{flex: '1 1 100%'}}
          variant="h4"
          id="tableTitle"
          component="div"
        >
          Team discrepancies
        </Typography>
        <Divider />
        <Typography
          sx={{flex: '1 1 100%'}}
          variant="h5"
          id="tableTitle"
          component="div"
        >
          Home Players  discrepancies
        </Typography>
        <Divider />
        {homePlayersDiscrepancies && homePlayersDiscrepancies && (
          <DisplayPlayerDiscrepancies
            playersDiscrepancies={homePlayersDiscrepancies}
          />)}

        <Typography
          sx={{flex: '1 1 100%'}}
          variant="h5"
          id="tableTitle"
          component="div"
        >
          Away Players  discrepancies
        </Typography>
        <Divider />
        {awayPlayersDiscrepancies && (
          <DisplayPlayerDiscrepancies
            playersDiscrepancies={awayPlayersDiscrepancies}
          />)}
      </div>
    </div>
  );
};

export default AllDiscrepancies;
