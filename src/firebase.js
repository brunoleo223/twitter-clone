// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLB9C1an2HMcMTArW0RdddldvlOt4yfnA",
  authDomain: "new-twitter-clone.firebaseapp.com",
  projectId: "new-twitter-clone",
  storageBucket: "new-twitter-clone.appspot.com",
  messagingSenderId: "175567501164",
  appId: "1:175567501164:web:0f6c501dd86a81c9186549"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;