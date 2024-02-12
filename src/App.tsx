import React, { useState } from "react";
import "./App.css";
import { PLAYERS } from "./constants";
import { PlayerList } from "./components/PlayerList";
import { Formation112 } from "./components/Formation112";

function App() {
  const [position, setPosition] = useState(null);

  const [player1, setPlayer1] = useState(null);
  const [player2, setPlayer2] = useState(null);
  const [player3, setPlayer3] = useState(null);
  const [player4, setPlayer4] = useState(null);
  const [player5, setPlayer5] = useState(null);

  // const [selectedPlayers, setSelectedPlayers] = useState({
  //   ST: null,
  //   CM1: null,
  //   CM2: null,
  //   CB: null,
  //   GK: null,
  // });

  const filteredPlayers =
    position === null
      ? PLAYERS
      : PLAYERS.filter(
          (player) => player.position === position
          // player1 &&
          // player1 !== player &&
          // player2 &&
          // player2 !== player &&
          // player3 &&
          // player3 !== player &&
          // player4 &&
          // player4 !== player &&
          // player5 &&
          // player5 !== player
        );

  // console.log({ filteredPlayers, position });
  return (
    <div className="grid grid-flow-col">
      <div className="col-span-2 border-2 h-screen ">formations dropdown</div>
      <div className="col-span-4 border-2 flex justify-center items-center h-screen">
        <Formation112
          setPosition={setPosition}
          player1={player1}
          player2={player2}
          player3={player3}
          player4={player4}
          player5={player5}
        />
      </div>
      <div className="col-span-2 border-2 max-h-screen overflow-y-scroll ">
        <PlayerList
          players={filteredPlayers}
          setPlayer={
            player1 == null
              ? setPlayer1
              : player2 === null
              ? setPlayer2
              : player3 === null
              ? setPlayer3
              : player4 === null
              ? setPlayer4
              : setPlayer5
          }
        />
      </div>
    </div>
  );
}

export default App;
