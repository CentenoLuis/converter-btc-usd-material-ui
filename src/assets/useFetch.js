import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData([data]);
      setLoading(false);
      setError(false);
    } catch {
      setError(true);
    }
  };

  useEffect(() => {
    getData();
  }, [url]);

  const infos = { data, loading, error };
  return infos;
};
