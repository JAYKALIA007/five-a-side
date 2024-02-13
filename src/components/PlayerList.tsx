import React from "react";
import { Player, SelectedPlayers } from "../types";
type PlayerListPropType = {
  players: Player[];
  allowToAddPlayers: boolean;
  selectedPosition: string | null;
  selectedPlayers: SelectedPlayers;
  setSelectedPlayers: React.Dispatch<React.SetStateAction<SelectedPlayers>>;
};
export const PlayerList: React.FC<PlayerListPropType> = ({
  players,
  selectedPlayers,
  setSelectedPlayers,
  allowToAddPlayers,
  selectedPosition,
}) => {
  const { player1, player2, player3, player4 } = selectedPlayers;

  return (
    <div className="flex flex-col gap-y-1">
      {players.map((player, index) => (
        <button
          key={`${player.name}-${index}`}
          className={`hover:cursor-pointer hover:bg-gray-100 p-1 px-4 flex justify-between ${
            !allowToAddPlayers && "hover:cursor-not-allowed"
          }`}
          disabled={!allowToAddPlayers}
          onClick={() => {
            if (player.position === selectedPosition) {
              if (!player1) {
                setSelectedPlayers((prev) => ({ ...prev, player1: player }));
              } else if (!player2) {
                setSelectedPlayers((prev) => ({ ...prev, player2: player }));
              } else if (!player3) {
                setSelectedPlayers((prev) => ({ ...prev, player3: player }));
              } else if (!player4) {
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
