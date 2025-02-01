interface Links {
  first?: string;
  prev?: string;
  next?: string;
  last?: string;
  totalPages?: number;
  [key: string]: string | number | undefined; // Add this line
}

const parseLinkHeader = (header: string | null): Links => {
  if (!header) {
    return {};
  }

  const links = header.split(",").reduce((acc: Links, part: string) => {
    const section = part.split(";");
    if (section.length !== 2) {
      return acc;
    }

    const url = section[0].replace(/<(.*)>/, "$1").trim();
    const name = section[1].replace(/rel="(.*)"/, "$1").trim();
    acc[name] = url;
    return acc;
  }, {});

  if (links.last) {
    const lastPageMatch = links.last.match(/page=(\d+)/);
    if (lastPageMatch) {
      links.totalPages = parseInt(lastPageMatch[1], 10);
    }
  }

  return links;
};

export { parseLinkHeader };
