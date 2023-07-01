import { getDoc, doc, addDoc, setDoc, collection } from "firebase/firestore";
import { db } from "./firebase";

  export async function getTeamFromDB(email) {
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

 export async function addDataToDB(email, teamData, teamSquad){
try {

  await Promise.allSettled([
addTeamToDB(email, teamData),
addSquadToTeam(teamSquad, email)
  ])
} catch (error) {
  
}

 }
  
  
 async function addTeamToDB(email, teamData){
  const docRef = doc(db, "teams", email);
  return await setDoc(docRef, teamData)

  }

   async function addSquadToTeam(teamSquad, email){
const squadRef = collection(db, "teams", email, "squad")

for(let i = 0; i< teamSquad.length; i++){
  const player = teamSquad[i]
   await addDoc(squadRef, player)
}

  }

