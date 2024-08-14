/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/config.firebase";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  // user Create 
  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // User login
  const loginUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password)
  };

  // User logOut 
  const logOutUser = () => {
    setLoader(true);
    return signOut(auth);
  }
  
  // user Management 
  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });
    return () => {
      unSub();
    }
  }, [])




  const authInfo = {
    user,
    loader,
    createUser,
    loginUser,
    logOutUser
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
