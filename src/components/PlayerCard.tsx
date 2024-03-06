import React from "react";
import { Player } from "../types";
import ReactCountryFlag from "react-country-flag";
import { SEE_MORE_GOOLGLE_SEARCH_URL } from "../constants";

type PlayerCardPropType = {
  player: Player;
};
export const PlayerCard: React.FC<PlayerCardPropType> = ({ player }) => {
  const handleSearch = () => {
    if (player.name) {
      const searchUrl = `${SEE_MORE_GOOLGLE_SEARCH_URL}${encodeURIComponent(
        player.name
      )}`;
      window.open(searchUrl, "_blank");
    }
  };

  return (
    <div className="max-w-80 text-sm italic text-gray-600">
      <div className="flex gap-2 items-center">
        <div className="text-base font-semibold underline">{player.name}</div>
        <ReactCountryFlag
          countryCode={player.country}
          style={{
            fontSize: "1.5em",
          }}
        />
        <div className="not-italic text-[10px]">{player.position}</div>
      </div>
      <div>{player.description}</div>
      <button
        className="underline italic text-blue-500 hover:cursor-pointer"
        onClick={handleSearch}
      >
        See More
      </button>
    </div>
  );
};
