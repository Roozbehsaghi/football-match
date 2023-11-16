import { rounds } from "./TeamRounds";
import { Team } from "./TeamInfo";

// RoundesTable Component
const RoundesTable = () => {
  return (
    <div>
      <div>
        <h3>Round Table</h3>
      </div>
      {/* Mapping through rounds to display match details for each round */}
      {rounds.map(
        (
          round: Array<{
            home: Team;
            away: Team;
            result: { home: number | null; away: number | null };
          }>,
          roundIndex: number
        ) => (
          <div className="round" key={roundIndex}>
            {/* Displaying the round header  */}
            <div className="headRound">Round: {roundIndex + 1}</div>
            <div className="titleRound">
              {/* Displaying column headers for home and away teams */}
              <p>Home</p>
              <p>Score</p>
              <p>Away</p>
            </div>
            <div>
              {/* Mapping through matches in the round to display match details */}
              {round.map(({ home, away, result }, teamIndex: number) => (
                <div className="dataRound" key={teamIndex}>
                  <p>{home.name}</p>

                  <p>
                    {result.home} - {result.away}
                  </p>

                  <p>{away.name}</p>
                </div>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default RoundesTable;
