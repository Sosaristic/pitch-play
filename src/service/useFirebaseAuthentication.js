import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence
} from "firebase/auth";
import { auth } from "./firebase";
import { toast } from "react-toastify";
import { useOnlineStatus } from "../hooks/useOnlineStatus";
import { useAppContext } from "../context/AppContext";

export const useFirebaseAuthentication = () => {
  
  const navigate = useNavigate();
  const { setDisplayLoader, } = useAppContext();
  const { onlineStatus } = useOnlineStatus();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid);
    } else {
      console.log("user is signed out");
    }
  });

  function signUp(email, password) {
    if (!onlineStatus) return toast.info("You are Offline, turn on network and try again");
    try {
      setDisplayLoader(true);

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          const user = userCredentials.user;
          console.log(user);
          setDisplayLoader(false);
        })
        .catch((error) => {
          const errorMessage = error.code.slice(5).replace(/-/g, " ");
          toast.error(errorMessage);
          setDisplayLoader(false);
        });
    } catch (error) {}
  }

  function signIn(email, password) {
    if (!onlineStatus) return toast.info("You are Offline, turn on network and try again");
    try {
      setDisplayLoader(true);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          setDisplayLoader(false);
          console.log(userCredentials);
          navigate("/dashboard/overview")
        })
        .catch((error) => {
          const errorMessage = error.code.slice(5).replace(/-/g, " ");
          toast.error(errorMessage);
          setDisplayLoader(false);
        });
    } catch (error) {}
  }

function signUserInWithSession(email, password){
  if (!onlineStatus) return toast.info("You are Offline, turn on network and try again");
  setDisplayLoader(true);

try {
  
  setPersistence(auth, browserSessionPersistence).then(()=>{
    return signIn(email, password)
  }).catch((error)=>{
    console.log(error);
    const errorMessage = error.code.slice(5).replace(/-/g, " ");
    toast.error(errorMessage);
    setDisplayLoader(false);
  })
} catch (error) {
  console.log(error);
}

} 

  function signUserOut() {
    signOut(auth)
      
      .catch((error) => {
        console.log(error);
      });
  }

  function checkIfUserIsSignedIn(){
    return auth.currentUser
  }

  return { signUp, signIn, signUserOut, signUserInWithSession, checkIfUserIsSignedIn };
};
