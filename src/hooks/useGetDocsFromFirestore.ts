/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

import { firebaseFirestore } from "../firebase";
import { getDocs, collection } from "firebase/firestore";

const useGetDocsFromFirestore = (collectionName: string) => {
  const [docs, setDocs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const docsRef = collection(firebaseFirestore, collectionName);

    getDocs(docsRef)
      .then((snapshot) => {
        const docsList = [];
        snapshot.forEach((doc) => {
          docsList.push({ id: doc.id, ...doc.data() });
        });

        console.log("docsList:", docsList);

        setDocs(docsList);
      })

      .catch((error) => setError(error))

      .finally(() => setIsLoading(false));
  }, [collectionName]);

  return [docs, isLoading, error];
};

export default useGetDocsFromFirestore;
