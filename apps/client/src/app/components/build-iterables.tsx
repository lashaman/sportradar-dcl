import DisplayDiscrepancyItem from "./display-discrepancy-item";
import React from "react";

const buildIterables = (statisticsDiscrepancies: object, title: string) => {
  const iterables = [];
  let id = '';
  for (const [key, value] of Object.entries(statisticsDiscrepancies)) {
    if(key === 'playerId' || key === 'id' || key === 'teamId' && value) {
      id = value
    }
    if (value.local  && value.external) {
      iterables.push(<DisplayDiscrepancyItem
         key={key}
        id={id}
        title={key}
        local={value.local}
        external={value.external}
      />)
    }
  }
  return iterables;
}

export default buildIterables;
