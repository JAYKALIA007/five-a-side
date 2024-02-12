import React from "react";
import { Player } from "../types";
export const PlayerList = ({
  players,
  setPlayer,
}: {
  players: Player[];
  setPlayer: any;
}) => {
  return (
    <>
      {players.map((player, index) => (
        <div
          key={`${player.name}-${index}`}
          className="m-1 p-1 hover:bg-gray-100 hover:cursor-pointer flex justify-between"
          onClick={() => {
            setPlayer(player);
          }}
        >
          <span>{player.name}</span>
          <span>{player.position}</span>
        </div>
      ))}
    </>
  );
};
