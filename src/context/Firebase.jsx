import React, { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from 'firebase/auth';
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyB358xoqe0vvMAaAiGtMrDGzTsMezJYeo0",
  authDomain: "bookify-cdc95.firebaseapp.com",
  projectId: "bookify-cdc95",
  storageBucket: "bookify-cdc95.appspot.com",
  messagingSenderId: "929180662267",
  appId: "1:929180662267:web:72ef96dc02a78c1a36b35e"
};

const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      setUser(user ? user : null);
    });

    return () => unsubscribe();
  }, []);

  const signUpUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  const signInUserWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(firebaseAuth, email, password);
  };

  const signInWithGoogle = () => {
    return signInWithPopup(firebaseAuth, googleProvider);
  };

  const handleCreateListing = async (name, isbn, price, cover , displayName ) => {
    try {
      const imageRef = ref(storage, `uploads/images/${Date.now()}_${cover.name}`);
      const uploadResult = await uploadBytes(imageRef, cover);

      return await addDoc(collection(firestore, 'books'), {
        name,
        isbn,
        price,
        displayName ,
        imageURL: uploadResult.ref.fullPath,
        userID: user.uid,
        userEmail: user.email,
        
        photoURL: user.photoURL,
      });
    } catch (error) {
      console.error("Error creating listing:", error);
      throw error;
    }
  };

  const listAllBooks = () => {
    return getDocs(collection(firestore, 'books'));
  };

  const getImageUrl = (path) => {
    return getDownloadURL(ref(storage, path));
  };

  const isLoggedIn = !!user;

  return (
    <FirebaseContext.Provider value={{ signUpUserWithEmailAndPassword, signInUserWithEmailAndPassword, signInWithGoogle, isLoggedIn, handleCreateListing, user, listAllBooks, getImageUrl }}>
      {children}
    </FirebaseContext.Provider>
  );
};
