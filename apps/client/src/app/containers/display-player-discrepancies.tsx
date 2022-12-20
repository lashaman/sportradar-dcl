import {PlayerRushingReceivingDiscrepancies} from "@sportradar-dcl/common";
import React from "react";
import DisplayDiscrepancyWrapper from "../components/display-discrepancy-wrapper";

interface DisplayPlayerDiscrepanciesProps {
  playersDiscrepancies: PlayerRushingReceivingDiscrepancies;
}

const displayPlayerDiscrepancies: React.FC<DisplayPlayerDiscrepanciesProps> = ({playersDiscrepancies}: DisplayPlayerDiscrepanciesProps) => {
  return (
    <div>
      <DisplayDiscrepancyWrapper discrepancies={playersDiscrepancies}/>
    </div>
  );
}

export default displayPlayerDiscrepancies;
