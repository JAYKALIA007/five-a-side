import React from "react";
import { Player, SelectedPlayers } from "../types";
type PlayerListPropType = {
  players: Player[];
  allowToAddPlayers: boolean;
  selectedPosition: string | null;
  setSelectedPlayers: React.Dispatch<React.SetStateAction<SelectedPlayers>>;
  selectedPlusIndex: number;
};
export const PlayerList: React.FC<PlayerListPropType> = ({
  players,
  setSelectedPlayers,
  allowToAddPlayers,
  selectedPosition,
  selectedPlusIndex,
}) => {
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
            if (player.position === selectedPosition) {
              if (selectedPlusIndex === 0) {
                setSelectedPlayers((prev) => ({ ...prev, player1: player }));
              } else if (selectedPlusIndex === 1) {
                setSelectedPlayers((prev) => ({ ...prev, player2: player }));
              } else if (selectedPlusIndex === 2) {
                setSelectedPlayers((prev) => ({ ...prev, player3: player }));
              } else if (selectedPlusIndex === 3) {
                setSelectedPlayers((prev) => ({ ...prev, player4: player }));
              } else {
                setSelectedPlayers((prev) => ({ ...prev, player5: player }));
              }
            }
          }}
        >
          <span>{player.name}</span>
          <span>{player.position}</span>
        </button>
      ))}
    </div>
  );
};
