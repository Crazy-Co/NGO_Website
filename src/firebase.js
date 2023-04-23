// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuTMhThqfeK6p8sd_4q1cnrCG18d4pl-M",
  authDomain: "login-page-1dac6.firebaseapp.com",
  projectId: "login-page-1dac6",
  storageBucket: "login-page-1dac6.appspot.com",
  messagingSenderId: "329845400978",
  appId: "1:329845400978:web:1a21ac32cad05881f34d4b",
  measurementId: "G-ZNS4HJQ5ME"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);