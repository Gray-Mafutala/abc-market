import { useEffect, useState } from "react";

import { firebaseFirestore } from "../firebase";
import { getDocs, collection } from "firebase/firestore";

const useGetDocsFromFirestore = <T>(collectionName: string) => {
  const [docs, setDocs] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // check if online or not
    if (navigator.onLine) {
      const docsRef = collection(firebaseFirestore, collectionName);

      getDocs(docsRef)
        .then((snapshot) => {
          const docsList = snapshot.docs.map(
            (doc) => ({ id: doc.id, ...doc.data() } as T)
          );
          setDocs(docsList);
        })

        .catch((error) => setError(error))
        .finally(() => setIsLoading(false));
    } else {
      setError({
        message:
          "It seems you are offline.",
        name: "ERR_INTERNET_DISCONNECTED",
      });

      setIsLoading(false);
    }
  }, [collectionName]);

  return { docs, isLoading, error };
};

export default useGetDocsFromFirestore;
