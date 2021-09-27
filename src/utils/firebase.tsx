// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTspdBxs-o9ojlzvBGqd2Z6CjtYViHtHU",
  authDomain: "coriolis-companion.firebaseapp.com",
  projectId: "coriolis-companion",
  storageBucket: "coriolis-companion.appspot.com",
  messagingSenderId: "822472227525",
  appId: "1:822472227525:web:cef77815cf94284b3a0eac",
  measurementId: "G-26XHGZ6X3X"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export default firebase;