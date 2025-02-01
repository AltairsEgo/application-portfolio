import { useEffect, useState } from "react";
import { githubRepoData } from "../../../data/githubRepoData";
import { GithubRepoData, Pagination } from "../../types";
import { parseLinkHeader } from "../helperFunctions/parseLinkHeader";

const useFetchGitHubRepoData = (fetchLink: string) => {
  const [githubRepoDataState, setGithubRepoDataState] = useState(
    [] as GithubRepoData[]
  );
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [paginationLinks, setPaginationLinks] = useState<Pagination>({});

  const headers = {
    Accept: "application/vnd.github+json",
    Authorization: `token ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
    "X-GitHub-Api-Version": "2022-11-28",
  };
  useEffect(() => {
    async function fetchGitHubRepoData() {
      await fetch(fetchLink, {
        headers,
      })
        .then((response) => {
          if (response.status !== 200) {
            throw `${response.status} ${response.statusText}`;
          }
          if (response.ok) {
            setPaginationLinks(parseLinkHeader(response.headers.get("link")));
          }
          response.json().then((data) => {
            setGithubRepoDataState(data);
            setIsLoading(false);
          });
        })
        .catch((error) => {
          setErrorMessage(error);
          console.log(error);
          setIsLoading(true);
        });
      if (githubRepoData) {
      }
      setIsLoading(false);
    }
    fetchGitHubRepoData();
  }, [fetchLink]);

  return { githubRepoDataState, isLoading, errorMessage, paginationLinks };
};

export { useFetchGitHubRepoData };
