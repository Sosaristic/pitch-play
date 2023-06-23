import { getDoc, doc } from "firebase/firestore";
import { db } from "./firebase";

export function useFirebaseFirestore() {
  async function getTeamFromDB(email) {
    const docRef = doc(db, "teams", email);
    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        return null
      }
    } catch (error) {
      console.log(error);
    }
   
  }

  return {getTeamFromDB}
}
