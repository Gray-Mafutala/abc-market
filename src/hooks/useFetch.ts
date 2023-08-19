import { useEffect, useState } from "react";

type UseFetchResponse = {
    data: string;
    isLoading: boolean;
    error: Error
}

const useFetch = <T>(url: string):UseFetchResponse => {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<T>();

    
  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url]);

    return { data, isLoading, error };
};

export default useFetch;
