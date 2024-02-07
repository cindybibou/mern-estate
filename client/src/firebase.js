// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-61113.firebaseapp.com",
  projectId: "mern-estate-61113",
  storageBucket: "mern-estate-61113.appspot.com",
  messagingSenderId: "64647685938",
  appId: "1:64647685938:web:ee00efedfabdc62b16d92b",
  measurementId: "G-2BVHS1CJYV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
