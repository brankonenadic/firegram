// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  "firebase/storage";
import  "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZNp5IjYRE2bZ2-6Q3LAWQTMAoRbtQ0hE",
  authDomain: "firegram-26ddd.firebaseapp.com",
  projectId: "firegram-26ddd",
  storageBucket: "firegram-26ddd.appspot.com",
  messagingSenderId: "32244388328",
  appId: "1:32244388328:web:c80d35cb8fa04220a8545d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
export {projectStorage ,projectFirestore};