import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPZ9zJWkjurlthr15mEz8vXTuZDoQ11WI",
  authDomain: "ecomerce-204bd.firebaseapp.com",
  projectId: "ecomerce-204bd",
  storageBucket: "ecomerce-204bd.appspot.com",
  messagingSenderId: "537904477377",
  appId: "1:537904477377:web:2ded18db682d3184811040",
  measurementId: "G-Z7G3RE2836"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
