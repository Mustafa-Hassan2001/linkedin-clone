// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1Nv0CWcIodMWDebw9ELfkn62CJG2Leus",
  authDomain: "linkedin-clone-60f8e.firebaseapp.com",
  projectId: "linkedin-clone-60f8e",
  storageBucket: "linkedin-clone-60f8e.appspot.com",
  messagingSenderId: "149306444785",
  appId: "1:149306444785:web:2741b1a586a6b360315250"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};