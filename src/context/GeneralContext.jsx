import { async } from "@firebase/util";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import { createContext } from "react";
import * as firebaseApp from "../firebase/firebase";

export const GeneralAuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const loginWithEmail = async (email, password) => {
    try {
      const newUser = await signInWithEmailAndPassword(
        firebaseApp.auth,
        email,
        password
      );
    } catch (error) {
      alert(error.message);
    }
  };

  onAuthStateChanged(firebaseApp.auth, (createdUser) => {
    setUser(createdUser);
  });

  const logOut = async () => {
    try {
      await signOut(firebaseApp.auth);
    } catch (error) {
      console.log(error.message);
    }
  };

  const data = {
    user: user,
    loginWithEmail: loginWithEmail,
    logOut: logOut,
  };

  return (
    <GeneralAuthContext.Provider value={data}>
      {children}
    </GeneralAuthContext.Provider>
  );
};
