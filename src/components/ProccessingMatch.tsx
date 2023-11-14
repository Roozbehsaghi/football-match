import { getRandomNumber } from "./TeamInfo";
import { rounds } from "./TeamRounds";
import { Team } from "./TeamInfo";

// Function to update team statistics
const updateTeamStats = (
  team: Team,
  score: number,
  points: number,
  win: number,
  draw: number,
  loss: number,
  strength: number
) => {
  team.score = score;
  team.points += points;
  team.win += win;
  team.draw += draw;
  team.loss += loss;
  team.strength += strength;
};

// Main function to process matches
const ProcessMatches = () => {
  // Iterating through rounds and matches
  rounds.forEach((round) => {
    round.forEach(({ home, away, result }) => {
      // Skipping matches where home and away teams are the same or home team has played more than 3 matches
      if (home.id === away.id || home.played > 3) return;

      // Generating random scores for home and away teams
      const homeScore: number = getRandomNumber();
      const awayScore: number = getRandomNumber();

      // Determining the winner
      const homeWin = homeScore > awayScore;
      const awayWin = homeScore < awayScore;

      // Updating result scores
      result.home = homeScore;
      result.away = awayScore;

      // Updating match and team statistics
      home.played += 1;
      away.played += 1;

      home.for += homeScore;
      away.for += awayScore;
      home.against += awayScore;
      away.against += homeScore;

      // Updating team stats based on match result
      if (homeWin) {
        updateTeamStats(home, homeScore, 3, 1, 0, 0, 4 + homeScore);
        updateTeamStats(away, awayScore, 0, 0, 0, 1, 1 + awayScore);
      } else if (awayWin) {
        updateTeamStats(home, homeScore, 0, 0, 0, 1, 1 + homeScore);
        updateTeamStats(away, awayScore, 3, 1, 0, 0, 4 + awayScore);
      } else {
        updateTeamStats(home, homeScore, 1, 0, 1, 0, 2 + homeScore);
        updateTeamStats(away, awayScore, 1, 0, 1, 0, 2 + awayScore);
      }
    });
  });
};

export default ProcessMatches;
