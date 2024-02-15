import React from "react";
import { FALLBACK_IMAGE_URL } from "../constants";
import { Player } from "../types";
type PlayerImagePropsType = {
  player: Player;
};
export const PlayerImage: React.FC<PlayerImagePropsType> = ({ player }) => {
  return (
    <div>
      <img
        src={Boolean(player.imgUrl) ? player.imgUrl : FALLBACK_IMAGE_URL}
        alt={`${player.name}`}
        className="w-10 h-10 rounded-full object-cover"
      />
    </div>
  );
};
