// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqsed5qdZ8b7Sc4npUSkiloh7B7NdFb1c",
  authDomain: "blogproject-6d625.firebaseapp.com",
  projectId: "blogproject-6d625",
  storageBucket: "blogproject-6d625.appspot.com",
  messagingSenderId: "323803549666",
  appId: "1:323803549666:web:d6f54b87dd3540d67f73bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();