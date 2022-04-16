// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6lESIaDJez4h_GTM1Uyh6iQeJt1mvOf4",
  authDomain: "travel-guide-ef07d.firebaseapp.com",
  projectId: "travel-guide-ef07d",
  storageBucket: "travel-guide-ef07d.appspot.com",
  messagingSenderId: "181538506398",
  appId: "1:181538506398:web:3125c82dc63eb1a9045d8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth(app);
export default auth;