import React, { useEffect } from "react";
import { useState } from "react";
import {
  DEFENDER_POSITION,
  FORMATIONS,
  GOALKEEPER_POSITION,
  MIDFIELDER_POSITION,
  PLAYERS,
  STRIKER_POSITION,
} from "./constants";
import { Formation } from "./components/Formation";
import { FormationsDropdown } from "./components/FormationsDropdown";
import { PlayerList } from "./components/PlayerList";
import { SelectedPlayers } from "./types";

const SELECTED_PLAYERS_DEFAULT_VALUE = {
  player1: null,
  player2: null,
  player3: null,
  player4: null,
  player5: null,
};

export default function App() {
  const [selectedFormation, setSelectedFormation] = useState(FORMATIONS[0]);
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null);
  const [selectedPlayers, setSelectedPlayers] = useState<SelectedPlayers>(
    SELECTED_PLAYERS_DEFAULT_VALUE
  );

  const [selectedPlusIndex, setSelectedPlusIndex] = useState<number>(0);

  useEffect(() => {
    setSelectedPosition(null);
    setSelectedPlayers(SELECTED_PLAYERS_DEFAULT_VALUE);
  }, [selectedFormation]);

  useEffect(() => {
    setSelectedPosition(null);
  }, [selectedPlayers]);

  const playerFilteredByPosition =
    selectedPosition === null
      ? PLAYERS
      : PLAYERS.filter((p) => p.position === selectedPosition);

  const filterSelectedPlayers = () => {
    const selectedPlayerNames = Object.values(selectedPlayers).map(
      (player) => player?.name
    );

    const filteredPlayers = playerFilteredByPosition.filter(
      (player) => !selectedPlayerNames.includes(player.name)
    );

    return filteredPlayers;
  };

  const filteredPlayers = filterSelectedPlayers();

  return (
    <div className="grid  grid-flow-col h-screen">
      <div className="col-span-3 border">
        <FormationsDropdown
          selectedFormation={selectedFormation}
          setSelectedFormation={setSelectedFormation}
        />
      </div>
      <div className="col-span-6 border flex justify-center items-center">
        <Formation
          formation={selectedFormation}
          setPosition={setSelectedPosition}
          players={selectedPlayers}
          setSelectedPlusIndex={setSelectedPlusIndex}
        />
      </div>
      <div className="col-span-3 border max-h-screen overflow-y-scroll">
        <div className="text-xl bg-gray-200 p-2 mb-4 sticky top-0">
          {!selectedPosition && `All Players`}
          {selectedPosition === STRIKER_POSITION && `Attackers`}
          {selectedPosition === MIDFIELDER_POSITION && `Midfielders`}
          {selectedPosition === DEFENDER_POSITION && `Defenders`}
          {selectedPosition === GOALKEEPER_POSITION && `Goalkeepers`}
        </div>
        <PlayerList
          players={filteredPlayers}
          setSelectedPlayers={setSelectedPlayers}
          allowToAddPlayers={selectedPosition !== null}
          selectedPosition={selectedPosition}
          selectedPlusIndex={selectedPlusIndex}
        />
      </div>
    </div>
  );
}
