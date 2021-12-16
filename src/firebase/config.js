// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
import { getFirestore} from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZNp5IjYRE2bZ2-6Q3LAWQTMAoRbtQ0hE",
  authDomain: "firegram-26ddd.firebaseapp.com",
  databaseURL: "https://firegram-26ddd-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "firegram-26ddd",
  storageBucket: "firegram-26ddd.appspot.com",
  messagingSenderId: "32244388328",
  appId: "1:32244388328:web:c80d35cb8fa04220a8545d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const projectStorage = getStorage(app);
const projectFirestore = getFirestore(app);
console.log(app);
console.log(projectStorage);
console.log(projectFirestore);
export { projectStorage, projectFirestore };