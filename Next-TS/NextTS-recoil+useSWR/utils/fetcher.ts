export const fetcher = (
  url: string,
  payload: {
    method: string;
    body: string;
  }
) => fetch(url, payload).then((res) => res.json());
