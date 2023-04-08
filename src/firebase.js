// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMLBoqgOET0hIs0ddgn8PBYm8nxGgPKUk",
  authDomain: "netflix-clone-26a89.firebaseapp.com",
  projectId: "netflix-clone-26a89",
  storageBucket: "netflix-clone-26a89.appspot.com",
  messagingSenderId: "836069857933",
  appId: "1:836069857933:web:9b331e7419a808e818a0c4",
  measurementId: "G-9HJJJ17TME"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
