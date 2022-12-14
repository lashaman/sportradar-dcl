import {Link} from "react-router-dom";
import {SyntheticEvent, useState} from "react";

const DiscrepanciesList = (): React.ReactElement => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <div>
        <h1>Welcome to discrepancies-list!</h1>
        <Link to="/players-discrepancies">Players Discrepancies</Link>
        <Link to="/team-discrepancies">Team Discrepancies</Link>
        <Link to="/all-discrepancies">All Discrepancies</Link>
        <Link to="/">Back to Home</Link>
      </div>
    </>

  );
};

export default DiscrepanciesList;
