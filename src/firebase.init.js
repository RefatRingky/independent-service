// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAq2Dlup-B4xfpziyYkO15h_kqxH6ibFRg",
  authDomain: "assignment-10-6a7db.firebaseapp.com",
  projectId: "assignment-10-6a7db",
  storageBucket: "assignment-10-6a7db.appspot.com",
  messagingSenderId: "501329538867",
  appId: "1:501329538867:web:d60f6ae92a92cf861f1846"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;