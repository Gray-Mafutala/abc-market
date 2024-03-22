import { firebaseFirestore } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

const saveOrderInFirestore = async (
  docData: unknown,
  collectionName: string
) => {
  try {
    const collectionRef = collection(firebaseFirestore, collectionName);
    const result = await addDoc(collectionRef, docData);
    console.log("result:", result);

    return result;
  } catch (error) {
    console.log("error:", error);
    return error;
  }
};

export default saveOrderInFirestore;
