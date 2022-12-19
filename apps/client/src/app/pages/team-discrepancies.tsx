import DisplayStatisticsDiscrepancies from "../containers/display-statistics-discrepancies";
import React, {useEffect, useState} from "react";
import GetDiscrepanciesService from "../services/get-discrepancies.service";
import {DiscrepancyTypes} from "@sportradar-dcl/common";

const TeamDiscrepancies = (): React.ReactElement => {
  const [teamDiscrepancies, setTeamDiscrepancies] = useState<any>({});
  useEffect(
    () => {
      GetDiscrepanciesService
        .getDiscrepancies(DiscrepancyTypes.TEAM)
        .then((discrepancies: any) => {
          setTeamDiscrepancies(discrepancies.statisticsDiscrepancies);
        }, (error) => {

        })
    }, []
  )
  return (
    <div>
      {teamDiscrepancies && (
        <DisplayStatisticsDiscrepancies
          statisticsDiscrepancies={teamDiscrepancies}
        />)}
    </div>
  );
};

export default TeamDiscrepancies;

