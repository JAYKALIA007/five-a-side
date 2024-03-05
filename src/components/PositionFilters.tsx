import React from "react";
import { PositionFilterButton } from "./PositionFilterButton";
import { PositionsEnum } from "../constants";
type PositionFiltersPropsType = {
  selectedPosition: PositionsEnum | null;
  onChange: (position: PositionsEnum) => void;
};
export const PositionFilters: React.FC<PositionFiltersPropsType> = ({
  selectedPosition,
  onChange,
}) => {
  return (
    <div className="text-xs flex items-center gap-x-6 text-gray-500">
      <div>Filter players by Position:</div>
      <PositionFilterButton
        position={PositionsEnum.ATTACKER_POSITION}
        onChange={onChange}
        isSelected={selectedPosition === PositionsEnum.ATTACKER_POSITION}
      />
      <PositionFilterButton
        position={PositionsEnum.MIDFIELDER_POSITION}
        onChange={onChange}
        isSelected={selectedPosition === PositionsEnum.MIDFIELDER_POSITION}
      />
      <PositionFilterButton
        position={PositionsEnum.DEFENDER_POSITION}
        onChange={onChange}
        isSelected={selectedPosition === PositionsEnum.DEFENDER_POSITION}
      />
      <PositionFilterButton
        position={PositionsEnum.GOALKEEPER_POSITION}
        onChange={onChange}
        isSelected={selectedPosition === PositionsEnum.GOALKEEPER_POSITION}
      />
    </div>
  );
};
