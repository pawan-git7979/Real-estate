// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-21aa6.firebaseapp.com",
  projectId: "mern-estate-21aa6",
  storageBucket: "mern-estate-21aa6.appspot.com",
  messagingSenderId: "933394906972",
  appId: "1:933394906972:web:6558b817935fb4ffec4b99"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);