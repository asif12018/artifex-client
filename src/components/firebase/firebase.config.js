// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCThqBR4lQSOj2NaaoNdYxc4gsoSXmj0UU",
  authDomain: "all-full-stack-projects.firebaseapp.com",
  projectId: "all-full-stack-projects",
  storageBucket: "all-full-stack-projects.appspot.com",
  messagingSenderId: "774027051501",
  appId: "1:774027051501:web:10aa5226de2f678677a7e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;