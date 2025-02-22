import { NavLink } from "react-router";
import styles from "./navigation-bar.module.css";

const NavigationBar = () => {
  return (
    <nav className={styles.navBar}>
      <NavLink to="/" className={styles.navLink}>
        Github Repositories
      </NavLink>
      <NavLink to="/to-do-manager" className={styles.navLink}>
        To-Do Manager
      </NavLink>
      <NavLink to="/test" className={styles.navLink}>
        Test area
      </NavLink>
    </nav>
  );
};

export { NavigationBar };
