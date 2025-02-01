import type { PaginationProps } from "./types";
import styles from "./pagination.module.css";

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  fetchLink,
  onPageChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const handlePageChange = (event: React.MouseEvent) => {
    event.preventDefault();
    const pageNumber = event?.currentTarget?.textContent;

    onPageChange(
      fetchLink?.replace(/.$/, pageNumber || ""),
      Number(pageNumber)
    );
  };

  return (
    <div className={styles.pagination}>
      <a href="#">&laquo;</a>
      {pages.map((page) => (
        <button
          key={page}
          className={page === currentPage ? styles.active : ""}
          onClick={handlePageChange}
        >
          {page}
        </button>
      ))}
      <a href="#">&raquo;</a>
    </div>
  );
};

export { Pagination };
