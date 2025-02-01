import { GithubRepoData } from "../../types";

//bubble sort
const sortingCards = (gitHubRepoData: JSX.Element[], selectedValue: string) => {
  const sortedGitHubRepoDataArray = [...gitHubRepoData];
  selectedValue = selectedValue.toLowerCase();
  //sort the array and retrun an array of sorted cards
  sortedGitHubRepoDataArray.sort((a, b) => {
    return a.props[selectedValue] > b.props[selectedValue] ? 1 : -1;
  });

  // for (let i = 0; i < sortedGitHubRepoDataArray.length - 1; i++) {
  //   console.log(sortedGitHubRepoDataArray?.[i]?.props?.[selectedValue]);
  //   for (let j = 0; j < sortedGitHubRepoDataArray.length - i - 1; j++) {
  //     const temp = sortedGitHubRepoDataArray[j];
  //     if (
  //       sortedGitHubRepoDataArray[j].props[selectedValue] >
  //       sortedGitHubRepoDataArray[j + 1].props[selectedValue]
  //     ) {
  //       sortedGitHubRepoDataArray[j] = temp;
  //       sortedGitHubRepoDataArray[j] = sortedGitHubRepoDataArray[j + 1];
  //       sortedGitHubRepoDataArray[j + 1] = temp;
  //     }
  //   }
  // }
  return sortedGitHubRepoDataArray;
};
export { sortingCards };
