import { RepoCardEnum } from "../../../constants/repoCard";

type DropdownFilterProps = {
  options: string[];
  onSelect: (selectedValue: RepoCardEnum) => void;
};

export type { DropdownFilterProps };
