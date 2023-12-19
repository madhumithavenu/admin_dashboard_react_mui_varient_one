// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWQbo6U-ZrOEGfgyEEDptbEclSEz2QbfM",
  authDomain: "react-firebase-8c2c0.firebaseapp.com",
  projectId: "react-firebase-8c2c0",
  storageBucket: "react-firebase-8c2c0.appspot.com",
  messagingSenderId: "496907748858",
  appId: "1:496907748858:web:957258a0a52d69c9259043",
  measurementId: "G-MHLWG3LMVW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);