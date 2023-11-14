// Importing the Team type and team objects from "./TeamInfo"
import { Team, teamA, teamB, teamC, teamD } from "./TeamInfo";

// Array to store teams
export const teams: Team[] = [teamA, teamB, teamC, teamD];

// Array of rounds, each containing home and away teams with initial result values
export const rounds: Array<
  Array<{
    home: Team;
    away: Team;
    result: { home: number | null; away: number | null };
  }>
> = [
  // Round 1
  [
    { home: teamA, away: teamD, result: { home: null, away: null } },
    { home: teamC, away: teamB, result: { home: null, away: null } },
  ],

  // Round 2
  [
    { home: teamB, away: teamA, result: { home: null, away: null } },
    { home: teamD, away: teamC, result: { home: null, away: null } },
  ],

  // Round 3
  [
    { home: teamD, away: teamB, result: { home: null, away: null } },
    { home: teamC, away: teamA, result: { home: null, away: null } },
  ],
];
