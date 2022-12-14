import {Link} from "react-router-dom";
export const DiscrepanciesList = (): React.ReactElement => {
  return (
    <div>
      <h1>Welcome to discrepancies-list!</h1>
      <Link to="/players-discrepancies">Players Discrepancies</Link>
      <Link to="/team-discrepancies">Team Discrepancies</Link>
      <Link to="/all-discrepancies">All Discrepancies</Link>
      <Link to="/">Back to Home</Link>
    </div>
  );
};
