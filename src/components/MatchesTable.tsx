import { teams } from "./TeamRounds";
import { Team } from "./TeamInfo";

// MatchesTable Component
const MatchesTable = () => {
  return (
    <div>
      <div>
        <h3>MatchesTable</h3>
      </div>
      <div>
        {/* Table displaying team statistics */}
        <table className="table">
          <thead>
            {/* Table header with relevant column names */}
            <tr className="tr">
              <th>Position</th>
              <th>Team</th>
              <th>Played</th>
              <th>Win</th>
              <th>Draw</th>
              <th>Loss</th>
              <th>For</th>
              <th>Against</th>
              <th>-/+</th>
              <th>Points</th>
              <th>Strength</th>
            </tr>
          </thead>
          <tbody>
            {/* Mapping through teams, sorting them by points and strength, and rendering table rows */}
            {teams
              .sort((a, b) => {
                if (b.points !== a.points) {
                  return b.points - a.points;
                } else {
                  return b.strength - a.strength;
                }
              })
              .map((team: Team, index: number) => (
                <tr className="tr" key={index}>
                  {/* Displaying team statistics in each row */}
                  <td>{index + 1}</td>
                  <td>{team.name}</td>
                  <td>{team.played}</td>
                  <td>{team.win}</td>
                  <td>{team.draw}</td>
                  <td>{team.loss}</td>
                  <td>{team.for}</td>
                  <td>{team.against}</td>
                  <td>{team.for - team.against}</td>
                  <td>{team.points}</td>
                  <td>{team.strength}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MatchesTable;
