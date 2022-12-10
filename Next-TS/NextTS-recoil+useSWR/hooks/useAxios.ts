import { useEffect, useRef, useState } from "react";
import axios from "axios";

export const useAxios = (url: string, method: string = "GET", payload: object) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  const controllerRef = useRef(new AbortController());
  const cancel = () => {
    controllerRef.current.abort();
  };
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.request({
          data: payload,
          signal: controllerRef.current.signal,
          method,
          url,
        });
        setData(response.data);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoaded(true);
      }
    })();
  }, [method, payload, url]);
  return { cancel, data, error, loaded };
};
