// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9J_Km_iVZJVt3IzrgT6OyXlauADRL1pA",
  authDomain: "kioshi-deco.firebaseapp.com",
  projectId: "kioshi-deco",
  storageBucket: "kioshi-deco.appspot.com",
  messagingSenderId: "237470706279",
  appId: "1:237470706279:web:8f86980c04974d92b4c2c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()