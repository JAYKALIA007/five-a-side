import React from "react";
import { Player, SelectedPlayers } from "../types";
import { PlayerImage } from "./PlayerImage";
type PlayerListPropType = {
  players: Player[];
  position: string | null;
  addPlayers: React.Dispatch<React.SetStateAction<SelectedPlayers>>;
  activeIndex: number;
};
export const PlayerList: React.FC<PlayerListPropType> = ({
  players,
  addPlayers,
  position,
  activeIndex,
}) => {
  const allowToAddPlayers = position !== null;
  return (
    <div className="flex flex-col gap-y-1">
      {players.map((player, index) => (
        <button
          key={`${player.name}-${index}`}
          className={`hover:cursor-pointer hover:bg-gray-100 p-1 px-4 flex justify-between ${
            !allowToAddPlayers && "hover:!cursor-not-allowed"
          }`}
          disabled={!allowToAddPlayers}
          onClick={() => {
            if (player.position === position) {
              const key = `player${activeIndex + 1}`;
              addPlayers((prev) => ({ ...prev, [key]: player }));
            }
          }}
        >
          <div className="flex items-center gap-x-2">
            <PlayerImage player={player} />
            <span>{player.name}</span>
          </div>
          <span>{player.position}</span>
        </button>
      ))}
    </div>
  );
};
