import React, { useMemo } from "react";
import { getRandomTeamMessages, getTeamRating } from "../helpers";
import { NonNullableSelectedPlayers } from "../types";
import ReactCountryFlag from "react-country-flag";

type TeamInfoPropTypes = {
  players: NonNullableSelectedPlayers;
};
export const TeamInfo: React.FC<TeamInfoPropTypes> = ({ players }) => {
  const teamSelectionMessage = useMemo(() => getRandomTeamMessages(), []);
  const playersArray = Object.values(players);
  const teamRating = getTeamRating(playersArray);
  return (
    <div className="italic w-3/4">
      <div className="text-xl font-medium">{teamSelectionMessage}</div>
      <ul className="list-disc">
        {playersArray.map((player) => (
          <li key={player?.name}>
            <span>{player?.name}</span>
            <ReactCountryFlag
              countryCode={player?.country ?? ""}
              style={{
                fontSize: "1.5em",
              }}
              className="ml-2.5"
            />
          </li>
        ))}
      </ul>
      <div className="font-semibold text-lg">
        Overall team rating - {teamRating} 🚀 LFG
      </div>
    </div>
  );
};
