
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD91oviQWlmqJrulAhZbW3oeC3PTTFWoK0",
  authDomain: "house-marketplace-app-9b25e.firebaseapp.com",
  projectId: "house-marketplace-app-9b25e",
  storageBucket: "house-marketplace-app-9b25e.appspot.com",
  messagingSenderId: "382444245028",
  appId: "1:382444245028:web:e9d82646fdffb0df5888b1"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()