import React from "react";
import { Player, SelectedPlayers } from "../types";
import { PlayerImage } from "./PlayerImage";
import { Tooltip } from "@radix-ui/themes";
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
          className={`hover:cursor-pointer hover:bg-gray-100 p-1 px-4 flex items-center justify-between ${
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
            <Tooltip
              content="Select a position first"
              className={`${allowToAddPlayers ? "hidden" : ""}`}
            >
              <>
                <span>{player.name}</span>
                <span className="text-[10px] text-gray-500">
                  {player.position}
                </span>
              </>
            </Tooltip>
          </div>
          <span className="text-sm text-gray-500">{player.rating}</span>
        </button>
      ))}
    </div>
  );
};
