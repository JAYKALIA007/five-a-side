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
          formation={selectedFormation}
          updateFormation={setSelectedFormation}
        />
      </div>
      <div className="col-span-6 border flex justify-center items-center">
        <Formation
          formation={selectedFormation}
          setPosition={setSelectedPosition}
          players={selectedPlayers}
          setActiveIndex={setActiveIndexInFormation}
        />
      </div>
      <div className="col-span-3 border max-h-screen overflow-y-scroll">
        <PlayerList
          players={filteredPlayers}
          addPlayers={setSelectedPlayers}
          position={selectedPosition}
          activeIndex={activeIndexInFormation}
        />
      </div>
    </div>
  );
}
