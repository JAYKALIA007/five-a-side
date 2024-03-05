import { useState, useEffect, useMemo } from "react";
import {
  FORMATIONS,
  PLAYERS,
  PositionsEnum,
  SELECTED_PLAYERS_DEFAULT_VALUE,
} from "../constants";
import { Formation } from "./Formation";
import { FormationsDropdown } from "./FormationsDropdown";
import { PlayerList } from "./PlayerList";
import { NonNullableSelectedPlayers, SelectedPlayers } from "../types";
import { useFuzzySearch } from "../hooks/useFuzzySearch";
import { Instructions } from "./Instructions";
import { checkIfEntireTeamSelected } from "../helpers";
import { TeamInfo } from "./TeamInfo";
import { FootballKickAnimation } from "./animations/FootballAnimation";
import { PositionFilters } from "./PositionFilters";

export const LandingPage = () => {
  const [showKickAnimation, setShowKickAnimation] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowKickAnimation(false);
    }, 2.3 * 1000);
    return () => clearTimeout(timeout);
  }, []);

  const [selectedFormation, setSelectedFormation] = useState<string>(
    FORMATIONS[0]
  );
  const [selectedPosition, setSelectedPosition] =
    useState<PositionsEnum | null>(null);
  const [selectedPlayers, setSelectedPlayers] = useState<SelectedPlayers>(
    SELECTED_PLAYERS_DEFAULT_VALUE
  );
  const [activeIndexInFormation, setActiveIndexInFormation] =
    useState<number>(0);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setSelectedPosition(null);
    setSelectedPlayers(SELECTED_PLAYERS_DEFAULT_VALUE);
    setSearchQuery("");
  }, [selectedFormation]);

  useEffect(() => {
    setSelectedPosition(null);
  }, [selectedPlayers, searchQuery]);

  const playerFilteredByPosition =
    selectedPosition === null
      ? PLAYERS
      : PLAYERS.filter((p) => p.position === selectedPosition);

  const filterOutSelectedPlayers = () => {
    const selectedPlayerNames = Object.values(selectedPlayers).map(
      (player) => player?.name
    );

    return playerFilteredByPosition.filter(
      (player) => !selectedPlayerNames.includes(player.name)
    );
  };

  let unselectedPlayersList = filterOutSelectedPlayers();

  const playersListToShow = useFuzzySearch({
    searchQuery,
    list: unselectedPlayersList,
  });

  const isPlayerListEmpty = playersListToShow.length === 0;

  const isEntireTeamSelected: boolean = useMemo(
    () => checkIfEntireTeamSelected(selectedPlayers),
    [selectedPlayers]
  );

  return (
    <div className="flex h-screen">
      <div className=" w-[30%] flex justify-center items-center border-r-2 rounded-xl">
        <Instructions />
      </div>
      <div className="w-[40%]">
        {showKickAnimation && <FootballKickAnimation />}
        {!showKickAnimation && (
          <div className="flex flex-col gap-10 justify-center items-center h-full w-full">
            <FormationsDropdown
              formation={selectedFormation}
              updateFormation={setSelectedFormation}
            />
            <Formation
              formation={selectedFormation}
              setPosition={setSelectedPosition}
              players={selectedPlayers}
              setActiveIndex={setActiveIndexInFormation}
            />
            <div className="h-40 flex justify-center ">
              {isEntireTeamSelected && (
                <TeamInfo
                  players={selectedPlayers as NonNullableSelectedPlayers}
                />
              )}
            </div>
          </div>
        )}
      </div>
      <div className="w-[30%] max-h-screen overflow-y-scroll border-l-2 rounded-xl">
        <div className="text-xl bg-gray-200 p-2 sticky top-0 rounded-md mb-4">
          {!selectedPosition && `Showing All Players`}
          {selectedPosition === PositionsEnum.ATTACKER_POSITION &&
            `Showing Attackers only`}
          {selectedPosition === PositionsEnum.MIDFIELDER_POSITION &&
            `Showing Midfielders only`}
          {selectedPosition === PositionsEnum.DEFENDER_POSITION &&
            `Showing Defenders only`}
          {selectedPosition === PositionsEnum.GOALKEEPER_POSITION &&
            `Showing Goalkeepers only`}
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setSelectedPosition(null);
            }}
            placeholder="Search for a player"
            className="border w-full p-2 rounded-md text-sm my-2"
          />
          <PositionFilters
            selectedPosition={selectedPosition}
            onChange={setSelectedPosition}
          />
        </div>

        {isPlayerListEmpty && (
          <div className="flex justify-center items-center h-3/4">
            <button
              onClick={() => setSearchQuery("")}
              className="border px-2 py-1 rounded-md  text-sm bg-gray-200 hover:bg-gray-300"
            >
              Reset filters
            </button>
          </div>
        )}

        {!isPlayerListEmpty && (
          <PlayerList
            players={playersListToShow}
            addPlayers={setSelectedPlayers}
            position={selectedPosition}
            activeIndex={activeIndexInFormation}
          />
        )}
      </div>
    </div>
  );
};
