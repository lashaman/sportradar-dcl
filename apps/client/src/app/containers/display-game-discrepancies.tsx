import {
  DiscrepancyDisplay, GameDiscrepanciesInterface,
} from "@sportradar-dcl/common";
import DisplayDiscrepancyItem from "../components/display-discrepancy-item";
import React from "react";

const displayGameDiscrepancies: React.FC<GameDiscrepanciesInterface> = (gameDiscrepancies: GameDiscrepanciesInterface) => {
  return (
    <div>
      {gameDiscrepancies?.attendanceDiscrepancies && (
        <DisplayDiscrepancyItem
          id={gameDiscrepancies.gameId}
          title="Attendance"
          local={gameDiscrepancies.attendanceDiscrepancies.local}
          external={gameDiscrepancies.attendanceDiscrepancies.external}
        />
      )}
    </div>
  );
}



export default displayGameDiscrepancies;
