import React from "react";
import { getRandomTeamMessages } from "../helpers";
import { SelectedPlayers } from "../types";

type TeamInfoPropTypes = {
  players: SelectedPlayers;
};
export const TeamInfo: React.FC<TeamInfoPropTypes> = ({ players }) => {
  const teamSelectionMessage = getRandomTeamMessages();
  const playersArray = Object.values(players);
  return (
    <div className="italic w-3/4">
      <div className="text-xl font-medium">{teamSelectionMessage}</div>
      <ul className="list-disc">
        {playersArray.map((player) => (
          <li key={player?.name}>
            <span>{player?.name}</span>
            {" - "}
            <span>{player?.country}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
