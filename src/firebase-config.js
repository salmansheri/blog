// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';  // authenticaation 
import { getFirestore } from 'firebase/firestore' // fire base
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvTXhtDSb98NBM1vgZMq4jd-89djcuxWA",
  authDomain: "blog-36225.firebaseapp.com",
  projectId: "blog-36225",
  storageBucket: "blog-36225.appspot.com",
  messagingSenderId: "824358005714",
  appId: "1:824358005714:web:46f97e576d09003aba360b",
  measurementId: "G-34MZ8J9NMR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

/* Initializing the authentication */ 
export const auth = getAuth(app)

/* Initialize the google provider */ 
export const provider = new GoogleAuthProvider(); 

/* Initialize the database */ 
export const db = getFirestore(app)


const analytics = getAnalytics(app);

