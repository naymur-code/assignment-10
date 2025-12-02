import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";

const provider = new GoogleAuthProvider();

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const registerWithEmailAndPass = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const googleLogin = () => {
    return signInWithPopup(auth, provider);
  };

  const authData = {
    registerWithEmailAndPass,
    setUser,
    user,
    googleLogin,
    loading
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
