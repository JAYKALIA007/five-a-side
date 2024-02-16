import { useState, useEffect } from "react";
import {
  FORMATIONS,
  PLAYERS,
  PositionsEnum,
  SELECTED_PLAYERS_DEFAULT_VALUE,
} from "./constants";
import { Formation } from "./components/Formation";
import { FormationsDropdown } from "./components/FormationsDropdown";
import { PlayerList } from "./components/PlayerList";
import { SelectedPlayers } from "./types";
import { useFuzzySearch } from "./hooks/useFuzzySearch";
import { Instructions } from "./components/Instructions";

export default function App() {
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

  return (
    <div className="grid  grid-flow-col h-screen">
      <div className="col-span-3 border flex justify-center items-center">
        <Instructions />
      </div>
      <div className="col-span-6 border">
        <div className="flex flex-col gap-10 justify-center items-center h-full w-full border-2">
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
        </div>
      </div>
      <div className="col-span-3 border max-h-screen overflow-y-scroll">
        <div className="text-xl bg-gray-200 p-2 sticky top-0 rounded-md mb-4">
          {!selectedPosition && `Showing All Players`}
          {selectedPosition === PositionsEnum.STRIKER_POSITION &&
            `Show Attackers only`}
          {selectedPosition === PositionsEnum.MIDFIELDER_POSITION &&
            `Show Midfielders only`}
          {selectedPosition === PositionsEnum.DEFENDER_POSITION &&
            `Show Defenders only`}
          {selectedPosition === PositionsEnum.GOALKEEPER_POSITION &&
            `Show Goalkeepers only`}
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
}
