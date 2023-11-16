// Function to generate a random number between 0 and 5
export let getRandomNumber = () => Math.floor(Math.random() * 6);

// Type definition for a team
export type Team = {
  id: number;
  name: string;
  played: number;
  win: number;
  draw: number;
  loss: number;
  for: number;
  against: number;
  score: number;
  points: number;
  strength: number;
};

// Function to create a team with initial values
export const createTeam = (id: number, name: string): Team => ({
  id,
  name,
  played: 0,
  win: 0,
  draw: 0,
  loss: 0,
  for: 0,
  against: 0,
  score: 0,
  points: 0,
  strength: 0,
});

// Teams with initial values created using the createTeam function
export const teamA: Team = createTeam(1, "Team A");
export const teamB: Team = createTeam(2, "Team B");
export const teamC: Team = createTeam(3, "Team C");
export const teamD: Team = createTeam(4, "Team D");
