import { Select } from "@radix-ui/themes";
import React, { Dispatch, SetStateAction } from "react";
import { FORMATIONS } from "../constants";

type FormationsDropdownPropType = {
  formation: string;
  updateFormation: Dispatch<SetStateAction<string>>;
};

export const FormationsDropdown: React.FC<FormationsDropdownPropType> = ({
  formation,
  updateFormation,
}) => {
  return (
    <div className="flex gap-x-2 items-center">
      <div>Select Formation</div>
      <Select.Root value={formation} onValueChange={updateFormation}>
        <Select.Trigger />
        <Select.Content position="popper">
          {FORMATIONS.map((formation) => (
            <Select.Item
              value={formation}
              key={formation}
              className="hover:cursor-pointer"
            >
              {formation}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    </div>
  );
};
