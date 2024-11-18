// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
import { getAuth ,createUserWithEmailAndPassword,onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhk4g4t1CG98oedjdo1VBbpdlb8hgDtYo",
  authDomain: "my-app-758e2.firebaseapp.com",
  projectId: "my-app-758e2",
  storageBucket: "my-app-758e2.firebasestorage.app",
  messagingSenderId: "551956452524",
  appId: "1:551956452524:web:8cbf0ee7d1a0be317abb09",
  measurementId: "G-T8P0KMZD3T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export{auth,createUserWithEmailAndPassword,onAuthStateChanged }