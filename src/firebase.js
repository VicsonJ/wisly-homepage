// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmIs2yyb9B8XKQiTFFRZUs3MtK4VrkTHY",
  authDomain: "wisly-project.firebaseapp.com",
  projectId: "wisly-project",
  storageBucket: "wisly-project.firebasestorage.app",
  messagingSenderId: "63541581802",
  appId: "1:63541581802:web:bb6d9c3475a2c5f3ea0493"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);