import { rounds } from "./TeamRounds";
import { Team } from "./TeamInfo"; // Import the Team type

const RoundesTable = () => {
  return (
    <div>
      <div>
        <h3>Round Table</h3>
      </div>
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
            <div className="headRound">Round: {roundIndex + 1}</div>
            <div className="titleRound">
              <p>Home</p>
              <p>Score</p>
              <p>Away</p>
            </div>
            <div>
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
