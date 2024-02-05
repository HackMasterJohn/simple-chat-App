// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCg7pXycF_FXvITa_NbLUb1WdtwilZoWeA",
  authDomain: "simple-chat-app-29886.firebaseapp.com",
  projectId: "simple-chat-app-29886",
  storageBucket: "simple-chat-app-29886.appspot.com",
  messagingSenderId: "252385014364",
  appId: "1:252385014364:web:bd14b2008cd66bcaab2c99",
  measurementId: "G-W9VK3415CV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);