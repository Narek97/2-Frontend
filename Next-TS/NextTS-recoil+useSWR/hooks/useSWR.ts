import useSWR from "swr";

export const useSWRHook = (url: string, fetcher: any, config?: object) => {
  const { data, error } = useSWR(url, fetcher, config);
  return { data, error };
};
