import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  setPersistence,
  sendEmailVerification,
  browserSessionPersistence,
} from "firebase/auth";
import { auth } from "./firebase";
import { toast } from "react-toastify";
import { useOnlineStatus } from "../hooks/useOnlineStatus";
import { useAppContext } from "../context/AppContext";

export const useFirebaseAuthentication = () => {
  const navigate = useNavigate();
  const { setDisplayLoader } = useAppContext();
  const { onlineStatus } = useOnlineStatus();

  // onAuthStateChanged(auth, (user) => {
  //   // if (user) {
  //   //   console.log("user is logged in");
  //   // } else {
  //   //   console.log("user is signed out");
  //   // }
  // });

  function signUp(email, password) {
    if (!onlineStatus) return toast.info("You are Offline, turn on network and try again");
    try {
      setDisplayLoader(true);

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          const user = userCredentials.user;
          sendEmailVerification(user)
            .then(() => {
              console.log("email verifucation sent");
              navigate("/verification", { replace: true, state: user.email });
            })
            .catch((error) => {
              console.log(error);
            });
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
          const isVerified = userCredentials.user.emailVerified;
          console.log(`user is verified ${isVerified}`);
          if (!isVerified) {
            throw new Error("auth/Email-not-verified");
          }
          navigate("/dashboard/overview");
        })
        .catch((error) => {
          if (error.message == "auth/Email-not-verified") {
            const errorMessage = error.message.slice(5).replace(/-/g, " ");
            toast.error(errorMessage);

          } else {
            const errorMessage = error.code.slice(5).replace(/-/g, " ");
            toast.error(errorMessage);
          }

          setDisplayLoader(false);
        });
    } catch (error) {}
  }

  function signUserInWithSession(email, password) {
    if (!onlineStatus) return toast.info("You are Offline, turn on network and try again");
    setDisplayLoader(true);

    try {
      setPersistence(auth, browserSessionPersistence)
        .then(() => {
          return signIn(email, password);
        })
        .catch((error) => {
          console.log(error);
          const errorMessage = error.code.slice(5).replace(/-/g, " ");
          toast.error(errorMessage);
          setDisplayLoader(false);
        });
    } catch (error) {
      console.log(error);
    }
  }

  function signUserOut() {
    signOut(auth)
      .then(() => {
        navigate("/sign-in");
      })

      .catch((error) => {
        console.log(error);
      });
  }

  function checkIfUserIsSignedIn() {
    return auth.currentUser;
  }

  function checkUserSignedIn() {
    return new Promise((resolve, reject) => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          resolve(user);
        } else {
          reject(new Error("user not signed in"));
        }
      });
    });
  }

  return {
    signUp,
    signIn,
    signUserOut,
    signUserInWithSession,
    checkIfUserIsSignedIn,
    checkUserSignedIn,
  };
};
