// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOPwXeRpTqU8o5cyz1IYi6nvnDY8H4yqc",
  authDomain: "realtor-clone-c6332.firebaseapp.com",
  projectId: "realtor-clone-c6332",
  storageBucket: "realtor-clone-c6332.appspot.com",
  messagingSenderId: "738863294393",
  appId: "1:738863294393:web:5dc371cd708c72d1023868"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();