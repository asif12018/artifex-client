// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB04iz5gSM4fHELq95XHpFsf5uGeag9Nbo',
  authDomain: 'all-full-stack-practice-app.firebaseapp.com',
  projectId: 'all-full-stack-practice-app',
  storageBucket: 'all-full-stack-practice-app.appspot.com',
  messagingSenderId: '529995816052',
  appId: '1:529995816052:web:1da8b9d9da2caf705ec521'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;