// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase-admin/firestore";
import { getApp, getApps, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNLxBPTek37iWOGaWtteD-KQ_kFgjQIlg",
  authDomain: "viking-computer-auth.firebaseapp.com",
  projectId: "viking-computer-auth",
  storageBucket: "viking-computer-auth.appspot.com",
  messagingSenderId: "467464516383",
  appId: "1:467464516383:web:4c2d36834906e01866b62a"
};

// Initialize Firebase
const app = getApps().length ? getApp() :  initializeApp(firebaseConfig);
const db = getFirestore();

export { app, db }