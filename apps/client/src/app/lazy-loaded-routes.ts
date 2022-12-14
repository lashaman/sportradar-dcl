import {lazy} from "react";

export const AllDiscrepancies = lazy(() => import('./pages/all-discrepancies'));
export const TeamDiscrepancies = lazy(() => import('./pages/team-discrepancies'));
export const PlayersDiscrepancies = lazy(() => import('./pages/players-discrepancies'));
export const DiscrepanciesList = lazy(() => import('./pages/discrepancies-list'));
