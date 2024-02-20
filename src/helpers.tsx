import { TEAM_MESSAGES } from "./constants";
import { SelectedPlayers } from "./types";

export const checkIfEntireTeamSelected = (
  players: SelectedPlayers
): boolean => {
  return !Object.values(players).includes(null);
};

export const getRandomTeamMessages = (): string => {
  return TEAM_MESSAGES[Math.floor(Math.random() * TEAM_MESSAGES.length)];
};
