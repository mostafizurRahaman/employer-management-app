import React, { createContext, useEffect, useState } from "react";
import {
   createUserWithEmailAndPassword,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signOut,
   updateProfile,
} from "firebase/auth";
import auth from "./../Cofigs/firebase.cofig";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(false);

   const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const Login = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   };

   const ProfileInfo = (profile) => {
      setLoading(true);
      return updateProfile(auth.currentUser, profile);
   };

   const logOut = () => {
      setLoading(false);
      return signOut(auth);
   };

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
         setLoading(false);
      });

      return () => {
         unsubscribe();
      };
   });

   const authInfo = {
      user,
      setUser,
      loading,
      setLoading,
      createUser,
      Login,
      ProfileInfo,
   };
   return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
   );
};

export default AuthProvider;
