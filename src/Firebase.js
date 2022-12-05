// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import firebase from 'firebase/compat/firestore/dist/';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXLjVr0ZFREy3Uc7oxXRbIKCV5LRe1Jnc",
  authDomain: "zulu-forum.firebaseapp.com",
  projectId: "zulu-forum",
  storageBucket: "zulu-forum.appspot.com",
  messagingSenderId: "682276189872",
  appId: "1:682276189872:web:a48bc45ce7a2cd0d38ad75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;