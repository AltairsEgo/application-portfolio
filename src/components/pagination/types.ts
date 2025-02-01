interface PaginationProps {
  currentPage: number;
  totalPages: number;
  fetchLink: string;
  onPageChange: (pageLink: string, pageNumber: number) => void;
}

export type { PaginationProps };
