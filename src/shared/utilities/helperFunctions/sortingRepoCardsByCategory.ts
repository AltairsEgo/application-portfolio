import { useEffect, useState } from "react";
import { GithubRepoData } from "../../types";

const useSortingRepoCardsByCategory = (
  repoCards: JSX.Element[],
  category: string
) => {
  const [sortingActive, setSortingActive] = useState(false);
  const sortedGitHubRepoDataArray = [...repoCards];
  useEffect(() => {
    category && setSortingActive(true);
    sortedGitHubRepoDataArray.sort((a, b) => {
      return a.props.name[category] > b.props.name[category] ? 1 : -1;
    });
  }, []);

  return { sortingActive, sortedGitHubRepoDataArray };
};

export { useSortingRepoCardsByCategory };
