import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "chat-79010.firebaseapp.com",
  projectId: "chat-79010",
  storageBucket: "chat-79010.appspot.com",
  messagingSenderId: "1083824472131",
  appId: "1:1083824472131:web:43acbf3c0654a301a614f6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
