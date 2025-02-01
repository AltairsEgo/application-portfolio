import { RepoCardEnum } from "../../../shared/constants/repoCard";
import type { ButtonProps } from "../../../shared/types";

const SearchButton: React.FC<ButtonProps> = ({ ...props }) => {
  return <button {...props}>{RepoCardEnum.SEARCH_BUTTON}</button>;
};

export { SearchButton };
