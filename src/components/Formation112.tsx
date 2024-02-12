import React from "react";
import { Position } from "./Position";
import { Player } from "../types";

export const Formation112 = ({
  setPosition,
  player1,
  player2,
  player3,
  player4,
  player5,
}: {
  setPosition: any;
  player1: Player | null;
  player2: Player | null;
  player3: Player | null;
  player4: Player | null;
  player5: Player | null;
}) => {
  return (
    <div className="w-80">
      <div className="h-12 bg-green-800 flex justify-evenly">
        <Position
          position="ST"
          setPosition={setPosition}
          player={player1}
          disabled={false}
        />
      </div>
      <div className="h-12 bg-green-600"></div>
      <div className="h-12 bg-green-800 flex justify-evenly">
        <Position
          position="CM"
          setPosition={setPosition}
          player={player2}
          disabled={player1 === null}
        />
        <Position
          position="CM"
          setPosition={setPosition}
          player={player3}
          disabled={player2 === null}
        />
      </div>
      <div className="h-12 bg-green-600 "></div>
      <div className="h-12 bg-green-800 flex justify-evenly">
        <Position
          position="CB"
          setPosition={setPosition}
          player={player4}
          disabled={player3 === null}
        />
      </div>
      <div className="h-12 bg-green-600"></div>
      <div className="h-12 bg-green-800 flex justify-evenly">
        <Position
          position="GK"
          setPosition={setPosition}
          player={player5}
          disabled={player4 === null}
        />
      </div>
      <div className="h-12 bg-green-600"></div>
    </div>
  );
};
