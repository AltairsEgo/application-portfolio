import React from "react";
import {
  fireEvent,
  getByPlaceholderText,
  getByText,
  render,
  screen,
} from "@testing-library/react/pure";
import { App } from "./App";
import userEvent from "@testing-library/user-event";
import { useFetchGitHubRepoData } from "./shared/utilities/hooks/useFetchGitHubRepoData";
import { githubRepoData } from "../src/data/githubRepoData";
import { generateRepoCards } from "./shared/utilities/helperFunctions/generateRepoCards";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getAllByText(/Justin/i);
//   expect(linkElement).toHaveLength(4);
// });

//
const isInputValueString = (input: string) => {
  const regExp = /^[A-Za-z0-9-]+$/;
  return regExp.test(input);
};

const isRepoCardArray = (repoCardList: unknown) => {
  if (!Array.isArray(repoCardList)) return false;
  else if (repoCardList.length === 0) return false;
  return React.isValidElement(repoCardList[0]);
};
describe("App", () => {
  beforeAll(() => {
    render(<App />);
  });
  test("Receive a list of RepoCard JSX.Elements from the mock data", () => {
    const repoCardList = generateRepoCards(githubRepoData);
    expect(isRepoCardArray(repoCardList)).toBeTruthy();
  });
  test("Number of elements reduce after filtering for a username", () => {
    const input = screen.getByPlaceholderText("Search for a specific user");
    userEvent.type(input, "Justin");
    const linkElement = screen?.getAllByText("Show Full Data");
    expect(linkElement.length)?.toEqual?.(3);
  });
  test("Validates if the user input complies with the github username conventions", () => {
    const input = screen.getByPlaceholderText("Search for a specific user");
    userEvent.type(input, "Justin123");
    expect(isInputValueString("Justin123")).toBeTruthy();
  });

  test("Fetches data from the GitHub API", async () => {
    const headers = {
      Accept: "application/vnd.github+json",
      Authorization: `token ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
      "X-GitHub-Api-Version": "2022-11-28",
    };
    await fetch("https://api.github.com/user/repos", { headers })?.then(
      (response) => {
        expect(response.status).toEqual(200);
        return response.json();
      }
    );
  });
});
