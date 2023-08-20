import { useEffect, useState } from "react";

interface State<T> {
    data?: T
    isLoading:boolean
    error?: Error
  }

const useFetch = <T= unknown>(url: string):State<T> => {
  const [data, setData] = useState<T>([] as T);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

    
  useEffect(() => {
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
