interface Pagination {
  first?: string;
  prev?: string;
  next?: string;
  last?: string;
  totalPages?: number;
  [key: string]: string | number | undefined; // Add this line
}

export type { Pagination };
