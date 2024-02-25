import { TEAM_MESSAGES } from "./constants";
import { Player, SelectedPlayers } from "./types";

export const checkIfEntireTeamSelected = (
  players: SelectedPlayers
): boolean => {
  return !Object.values(players).includes(null);
};

export const getRandomTeamMessages = (): string => {
  return TEAM_MESSAGES[Math.floor(Math.random() * TEAM_MESSAGES.length)];
};

export const getTeamRating = (players: Player[]): number => {
  const playersArray = Object.values(players);
  const avgTeamRating = playersArray.reduce(
    (acc, player) => acc + player.rating,
    0
  );
  return Math.floor(avgTeamRating / playersArray.length);
};
