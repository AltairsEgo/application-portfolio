import { Pagination } from "../../types";

const getCurrentFetchLink = (paginationLinks: Pagination) => {
  if (paginationLinks.prev) {
    const prevPageMatch = paginationLinks?.prev?.match(/page=(\d+)/);
    if (prevPageMatch) {
      return parseInt(prevPageMatch[1], 10) + 1;
    }
  }

  if (paginationLinks.next) {
    const nextPageMatch = paginationLinks?.next?.match(/page=(\d+)/);
    if (nextPageMatch) {
      return parseInt(nextPageMatch[1], 10) - 1;
    }
  }

  // Default to the first page if no prev or next links are available
  return 1;
};

export { getCurrentFetchLink };
