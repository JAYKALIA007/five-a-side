import React from "react";
import { Position } from "./Position";
import { SelectedPlayers } from "../types";
import { PositionsEnum } from "../constants";
type FormationPropType = {
  formation: string;
  setPosition: React.Dispatch<React.SetStateAction<null | PositionsEnum>>;
  players: SelectedPlayers;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
};

export const Formation: React.FC<FormationPropType> = ({
  formation,
  setPosition,
  players,
  setActiveIndex,
}) => {
  const formationArray = formation.split("");
  const noOfStrikers = parseInt(formationArray[0]);
  const noOfMidfielders = parseInt(formationArray[1]);
  const noOfDefenders = parseInt(formationArray[2]);

  const { player1, player2, player3, player4, player5 } = players;

  const strikers = noOfStrikers > 1 ? [player1, player2] : [player1];
  const midFielders =
    noOfStrikers > 1
      ? [player3]
      : noOfMidfielders > 1
      ? [player2, player3]
      : [player2];
  const defenders =
    noOfStrikers + noOfMidfielders === 2 ? [player3, player4] : [player4];

  return (
    <div>
      <p>Selected formation : {formation}</p>
      <div className="w-80">
        <div className="h-12 bg-green-800 flex justify-evenly">
          {Array(noOfStrikers)
            .fill("")
            .map((_, index1) => (
              <Position
                key={index1}
                position={PositionsEnum.ATTACKER_POSITION}
                setPosition={setPosition}
                player={strikers[index1]}
                index={index1}
                setActiveIndex={setActiveIndex}
              />
            ))}
        </div>
        <div className="h-12 bg-green-600"></div>
        <div className="h-12 bg-green-800  flex justify-evenly">
          {Array(noOfMidfielders)
            .fill("")
            .map((_, index2) => (
              <Position
                key={index2}
                position={PositionsEnum.MIDFIELDER_POSITION}
                setPosition={setPosition}
                player={midFielders[index2]}
                index={noOfStrikers + index2}
                setActiveIndex={setActiveIndex}
              />
            ))}
        </div>
        <div className="h-12 bg-green-600"></div>
        <div className="h-12 bg-green-800 flex justify-evenly">
          {Array(noOfDefenders)
            .fill("")
            .map((_, index3) => (
              <Position
                key={index3}
                position={PositionsEnum.DEFENDER_POSITION}
                setPosition={setPosition}
                player={defenders[index3]}
                index={noOfStrikers + noOfMidfielders + index3}
                setActiveIndex={setActiveIndex}
              />
            ))}
        </div>
        <div className="h-12 bg-green-600"></div>
        <div className="h-12 bg-green-800 flex justify-evenly">
          <Position
            position={PositionsEnum.GOALKEEPER_POSITION}
            setPosition={setPosition}
            player={player5}
            index={4}
            setActiveIndex={setActiveIndex}
          />
        </div>
        <div className="h-12 bg-green-600"></div>
      </div>
    </div>
  );
};
