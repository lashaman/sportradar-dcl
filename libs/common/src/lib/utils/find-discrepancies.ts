import {Player} from "../interfaces";

export function findDiscrepanciesInObjects (home: any, external: any) {
  const discrepancies: any = {};
  for (const [key, value] of Object.entries(home)) {
    if (external[key]) {
      if (value !== external[key]) {
        discrepancies[key] = {local: value, external: external[key]};
      }
    }
  }
  return discrepancies;
}

export function findDiscrepanciesInArray (home: Player[], external: Player[]) {
  console.log('home', home, 'external', external);
  const discrepancies: any[] = [];
  for (let i = 0; i < home.length; i++) {
    const foundDiscrepancies = findDiscrepanciesInObjects(home[i], external[i]);
    if (Object.keys(foundDiscrepancies).length > 0) {
      discrepancies.push(foundDiscrepancies);
    }
  }
  return discrepancies;
}


