import { Select } from "@radix-ui/themes";
import React, { Dispatch, SetStateAction } from "react";
import { FORMATIONS } from "../constants";

type FormationsDropdownPropType = {
  selectedFormation: string;
  setSelectedFormation: Dispatch<SetStateAction<string>>;
};

export const FormationsDropdown: React.FC<FormationsDropdownPropType> = ({
  selectedFormation,
  setSelectedFormation,
}) => {
  return (
    <div>
      <div>Select Formation</div>
      <Select.Root
        value={selectedFormation}
        onValueChange={setSelectedFormation}
      >
        <Select.Trigger />
        <Select.Content position="popper">
          {FORMATIONS.map((formation) => (
            <Select.Item value={formation} key={formation}>
              {formation}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    </div>
  );
};
