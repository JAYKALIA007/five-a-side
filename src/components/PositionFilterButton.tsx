import React from "react";
import { PositionsEnum } from "../constants";

type PositionFilterButtonPropType = {
  position: PositionsEnum;
  onChange: (position: PositionsEnum) => void;
  isSelected: boolean;
};

export const PositionFilterButton: React.FC<PositionFilterButtonPropType> = ({
  position,
  onChange,
  isSelected,
}) => {
  return (
    <button
      className={`border border-gray-500 px-2 py-1 rounded ${
        isSelected && "bg-gray-300"
      }`}
      onClick={() => onChange(position)}
    >
      {position}
    </button>
  );
};
