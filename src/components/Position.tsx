import { Tooltip } from "@radix-ui/themes";
import React from "react";
import { Player } from "../types";
type PositionPropType = {
  position: string;
  setPosition: React.Dispatch<React.SetStateAction<null | string>>;
  player: Player | null;
};
export const Position: React.FC<PositionPropType> = ({
  position,
  setPosition,
  player,
}) => {
  return (
    <div className="flex flex-col items-center text-white">
      <div className="text-xs">{position}</div>
      {player === null && (
        <Tooltip content="Add Player">
          <div
            className="w-6 h-6 bg-gray-400 rounded-full hover:cursor-pointer px-auto flex justify-center items-center"
            onClick={() => {
              setPosition(position);
            }}
          >
            +
          </div>
        </Tooltip>
      )}
      <div>{player && player.name}</div>
    </div>
  );
};
