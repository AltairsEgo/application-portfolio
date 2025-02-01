import React, { createContext, useEffect, useMemo, useState } from "react";
import styles from "./app.module.css";
import { filterArrayForUserInput } from "./shared/utilities/helperFunctions/filterArrayForUserInput";
import { RepoCardEnum } from "./shared/constants/repoCard";
import { useFetchGitHubRepoData } from "./shared/utilities/hooks/useFetchGitHubRepoData";
import { generateRepoCards } from "./shared/utilities/helperFunctions/generateRepoCards";
import { DropdownFilter } from "./components/dropDownMenu/DropDownFilter";
import { SearchButton } from "./components/basic/buttons/SearchButton";
import { sortingCards } from "./shared/utilities/helperFunctions/sortingCards";
import { Pagination } from "./components/pagination/Pagination";
import { NavigationBar } from "./components/navigation-bar/navigation-bar";

const PageNumberContext = createContext(0);
const App = () => {
  const [userSearch, setUserSearch] = useState("");
  const [sortingCategory, setSortingCategory] = useState("" as RepoCardEnum);
  const [fetchLink, setFetchLink] = useState(
    "https://api.github.com/user/repos?per_page=4&page=1"
  );
  const [currentPage, setCurrentPage] = useState(1);

  const updateUserSearch = (
    userInputEvent: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = userInputEvent.target.value;
    setUserSearch(inputValue);
  };
  const { githubRepoDataState, isLoading, errorMessage, paginationLinks } =
    useFetchGitHubRepoData(fetchLink);

  const repoCards = useMemo(
    () => generateRepoCards(githubRepoDataState),
    [githubRepoDataState]
  );

  const updateFetchLinkAndPageNumber = (
    pageLink: string,
    pageNumber: number
  ) => {
    setFetchLink(pageLink);
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    setSortingCategory(sortingCategory);
  }, [sortingCategory]);

  const sortedOrFilteredGithubRepoCards = useMemo(() => {
    if (userSearch && sortingCategory) {
      return filterArrayForUserInput(
        sortingCards(repoCards, sortingCategory),
        userSearch
      );
    } else if (userSearch) {
      return filterArrayForUserInput(repoCards, userSearch);
    } else if (sortingCategory) {
      return sortingCards(repoCards, sortingCategory);
    } else {
      return repoCards;
    }
  }, [repoCards, sortingCategory, userSearch]);

  return isLoading ? (
    // errorMessage ? (
    //   alert(errorMessage)
    // ) : (
    <div>Loading...</div>
  ) : (
    // )
    <div className={styles.pageLayout}>
      <header className={styles.appHeader}>
        <h1>{RepoCardEnum.TITLE}</h1>
      </header>
      <main className={styles.pageContent}>
        <section className={styles.searchAndFilterContainer}>
          <input
            role="search"
            onInput={updateUserSearch}
            placeholder={"Search for a specific user"}
            className={styles.searchField}
          />
          <SearchButton className={styles.searchButton} onClick={() => {}} />
          <DropdownFilter
            options={[
              RepoCardEnum.STARGAZERS_COUNT,
              RepoCardEnum.ID,
              RepoCardEnum.TITLE,
            ]}
            onSelect={(selectedValue: RepoCardEnum) => {
              setSortingCategory(selectedValue);
            }}
          />
        </section>
        {/* <PageNumberContext.Provider value={repoCards}> */}
        {sortedOrFilteredGithubRepoCards}
        {/* </PageNumberContext.Provider> */}
      </main>
      <footer className={styles.footer}>
        <Pagination
          currentPage={currentPage}
          totalPages={paginationLinks.totalPages || currentPage}
          fetchLink={fetchLink}
          onPageChange={updateFetchLinkAndPageNumber}
        />
      </footer>
    </div>
  );
};

export { App, PageNumberContext as ThemeContext };
