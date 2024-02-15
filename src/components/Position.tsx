import { Tooltip } from "@radix-ui/themes";
import React from "react";
import { Player } from "../types";
import { PositionsEnum } from "../constants";
type PositionPropType = {
  position: PositionsEnum;
  setPosition: React.Dispatch<React.SetStateAction<null | PositionsEnum>>;
  player: Player | null;
  index: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
};
export const Position: React.FC<PositionPropType> = ({
  position,
  setPosition,
  player,
  index,
  setActiveIndex,
}) => {
  return (
    <div className="flex flex-col items-center text-white text-xs">
      <div className="">{position}</div>
      {player === null && (
        <Tooltip content="Add Player">
          <div
            className="w-6 h-6 bg-gray-400 rounded-full hover:cursor-pointer px-auto flex justify-center items-center"
            onClick={() => {
              setPosition(position);
              setActiveIndex(index);
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
