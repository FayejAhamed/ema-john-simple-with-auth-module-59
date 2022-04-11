// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaeRcTrk-O-ZM7MN6-XSvLh4k3PCy5urc",
  authDomain: "ema-john-simple-3453c.firebaseapp.com",
  projectId: "ema-john-simple-3453c",
  storageBucket: "ema-john-simple-3453c.appspot.com",
  messagingSenderId: "121605577285",
  appId: "1:121605577285:web:5e2cbaf7b58ae112c4612c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;