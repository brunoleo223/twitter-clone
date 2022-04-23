// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9oLYdZdlyu3yJNZem7UYcSqXs5jkUGnY",
  authDomain: "twitter-clone-f71ae.firebaseapp.com",
  projectId: "twitter-clone-f71ae",
  storageBucket: "twitter-clone-f71ae.appspot.com",
  messagingSenderId: "425394145235",
  appId: "1:425394145235:web:e9b92f125f85cc2aad5126"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;