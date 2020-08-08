export const buildParams = (params: any) => {
  if (typeof window !== "undefined" && window.location.search) {
    const queries = window.location.search.slice(1).split('&');
    for (const q of queries) {
      const [k, v] = q.split('=');
      params[k] = v
    }
  }
  return params;
};
