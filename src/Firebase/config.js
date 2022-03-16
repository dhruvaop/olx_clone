import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firebase'
import 'firebase/storage'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxH8mHQON_xXTP9Nve3NrPgEPAD3tn-Rs",
  authDomain: "olx-clone-b8b2a.firebaseapp.com",
  projectId: "olx-clone-b8b2a",
  storageBucket: "olx-clone-b8b2a.appspot.com",
  messagingSenderId: "228418511992",
  appId: "1:228418511992:web:f145191ff0c31e7a04b98d",
  measurementId: "G-9Q3RFK75S2"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
