// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzmeKC3saq60Inr6ksLXMCseGYL_h0VSY",
  authDomain: "red-string-beer.firebaseapp.com",
  databaseURL: "https://red-string-beer-default-rtdb.firebaseio.com",
  projectId: "red-string-beer",
  storageBucket: "red-string-beer.appspot.com",
  messagingSenderId: "760923174777",
  appId: "1:760923174777:web:86aa46805762bb9bcf21a8",
  measurementId: "G-GXV610TE8N"
};

// Initialize Firebase
initializeApp(firebaseConfig);