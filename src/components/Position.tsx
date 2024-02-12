import React from "react";
import { Player } from "../types";

export const Position = ({
  position,
  setPosition,
  player,
  disabled,
}: {
  position: string;
  setPosition: any;
  player: Player | null;
  disabled: boolean;
}) => {
  return (
    <div className="flex flex-col text-white">
      <button
        className="hover:cursor-pointer disabled:cursor-not-allowed"
        onClick={() => {
          console.log({ position, player });
          setPosition(player ? null : position);
        }}
        disabled={disabled}
      >
        <div className="bg-gray-400 rounded-full w-7 h-7 hover:bg-gray-300 ">
          {player ? "-" : "+"}
        </div>
        <span className="">{position}</span>
      </button>
      <span>{player?.name}</span>
    </div>
  );
};
