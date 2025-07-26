// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlHfgYzM5QJLeAxNwlfI10hhCfVkjY_uc",
  authDomain: "zyptoproject.firebaseapp.com",
  projectId: "zyptoproject",
  storageBucket: "zyptoproject.firebasestorage.app",
  messagingSenderId: "356410665758",
  appId: "1:356410665758:web:7ff8b3f8d8dda175c9770f",
  measurementId: "G-X3DMFNRH00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);