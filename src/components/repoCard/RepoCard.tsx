import { githubRepoData } from "../../data/githubRepoData";
import styles from "./repoCard.module.css";
import { GithubRepoData } from "../../shared/types/GithubRepoData";
import { useContext } from "react";
import { ThemeContext } from "../../App";

const showFullRepoData = () => {
  window.alert(JSON.stringify(githubRepoData, null, 2));
};

const RepoCard = (githubRepoData: GithubRepoData) => {
  const theme = useContext(ThemeContext);

  const { name, description, html_url, url, stargazers_count } = githubRepoData;
  return (
    <section role="gridcell" className={styles["repo-card"]}>
      <h4 className={styles["repo-card__header"]}>{name}</h4>
      <p className={styles["repo-card__id"]}>Stargazers: {stargazers_count}</p>
      <p className={styles["repo-card__description"]}>{description}</p>
      <a
        className={styles["repo-card__link"]}
        href={html_url}
        aria-label="A Link leading to the the Github Repository"
      >
        {url}
      </a>
      <button onClick={showFullRepoData}>Show Full Data</button>
    </section>
  );
};

export { RepoCard };
