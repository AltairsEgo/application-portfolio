import React, { useState } from "react";
import type { DropdownFilterProps } from "../../shared/types";
import { RepoCardEnum } from "../../shared/constants/repoCard";

const DropdownFilter: React.FC<DropdownFilterProps> = ({
  options,
  onSelect,
}) => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event?.target?.value;
    setSelectedOption(selectedValue);

    onSelect(selectedValue.toLowerCase() as RepoCardEnum);
  };

  return (
    <select value={selectedOption} onChange={handleSelect}>
      <option value="">Select an option</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export { DropdownFilter };
