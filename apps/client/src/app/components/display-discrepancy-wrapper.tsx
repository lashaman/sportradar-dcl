import {PlayerDiscrepanciesInterface, PlayerRushingReceivingDiscrepancies} from "@sportradar-dcl/common";
import buildIterables from "./build-iterables";
import Typography from "@mui/material/Typography";
import React from "react";
import {Divider} from "@mui/material";
interface DisplayDiscrepancyWrapperProps {
  discrepancies: PlayerRushingReceivingDiscrepancies;
}
const displayDiscrepancyWrapper: React.FC<DisplayDiscrepancyWrapperProps> =
  ({discrepancies}: DisplayDiscrepancyWrapperProps) => {
  return (<>
    {
      discrepancies.localReceivingPlayerDiscrepancies &&

    (discrepancies.localReceivingPlayerDiscrepancies
        .map((item: PlayerDiscrepanciesInterface) => {
          return (<>
            <Typography
              sx={{flex: '1 1 100%'}}
              variant="h6"
              id="tableTitle"
              component="div"
            >
              Players  Receiving discrepancies
            </Typography>
            <Divider />
            {buildIterables(item, 'Receiving Players')}
          </>);
        })
    )
}
  {
    (discrepancies.localReceivingPlayerDiscrepancies
        .map((item: PlayerDiscrepanciesInterface) => {
          return (
            <>
              <Typography
                sx={{flex: '1 1 100%'}}
                variant="h5"
                id="tableTitle"
                component="div"
              >
                Players Rushing discrepancies
              </Typography>
              {buildIterables(item, 'Rushing players')}
            </>)
        }
    ))
  }
  </>);
  }

export default displayDiscrepancyWrapper;
