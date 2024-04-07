import { useEffect, useState } from "react";

interface State<T> {
  data: T | null
  isLoading: boolean;
  error: Error | null;
}

const useFetch = <T>(url: string): State<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((data) => data.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
