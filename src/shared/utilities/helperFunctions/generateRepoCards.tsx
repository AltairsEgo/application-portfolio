import { RepoCard } from "../../../components/repoCard";
import { GithubRepoData } from "../../types";

const generateRepoCards = (gitHubRepoDataArray: GithubRepoData[]) => {
  return gitHubRepoDataArray.map((repoData, index) => (
    <RepoCard key={index} {...repoData} />
  ));
};

export { generateRepoCards };
