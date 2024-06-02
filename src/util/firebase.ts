// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCdPb2unot1M-aaRCBR1-W58n1dGXRpp4",
  authDomain: "voting-app-3d878.firebaseapp.com",
  projectId: "voting-app-3d878",
  storageBucket: "voting-app-3d878.appspot.com",
  messagingSenderId: "898732254154",
  appId: "1:898732254154:web:c4e75ecfe7ede196fb2533",
  measurementId: "G-LJY2BFHPNP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth:any = getAuth();
