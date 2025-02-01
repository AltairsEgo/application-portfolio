import React, { useState } from "react";
import { screen, render, fireEvent } from "@testing-library/react";

const unitTestsGithubArray = (userSearch: string) => {
  const repoCards = [
    { id: 1, title: "React", stargazers_count: 1000 },
    { id: 2, title: "Angular", stargazers_count: 500 },
    { id: 3, title: "Vue", stargazers_count: 200 },
  ];
  return repoCards.filter((repoCard) =>
    repoCard.title.toLowerCase().includes(userSearch.toLowerCase())
  );
};

test("The array should have a smaller length after filtering", () => {
  const [userSearch, setUserSearch] = useState("");
  const [sortingCategory, setSortingCategory] = useState("");
  expect(unitTestsGithubArray).toHaveLength(3);
});
export { unitTestsGithubArray };
