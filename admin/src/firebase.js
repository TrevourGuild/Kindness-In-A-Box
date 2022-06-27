// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA0o7Ii4iKoMtJ2vP-eYrvAGY9e15GiRw",
  authDomain: "kindnessinabox-a1090.firebaseapp.com",
  projectId: "kindnessinabox-a1090",
  storageBucket: "kindnessinabox-a1090.appspot.com",
  messagingSenderId: "1081925621797",
  appId: "1:1081925621797:web:72203ef8f3827534d447cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app