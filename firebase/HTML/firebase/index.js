// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAFgXg5tpJLqtfpJfSlLtG9mbL6caSxf0",
  authDomain: "rehman-pakistan.firebaseapp.com",
  databaseURL: "https://rehman-pakistan-default-rtdb.firebaseio.com",
  projectId: "rehman-pakistan",
  storageBucket: "rehman-pakistan.appspot.com",
  messagingSenderId: "212338673824",
  appId: "1:212338673824:web:006d9a6bfdbf9822c9a1c5",
  measurementId: "G-8DTM767PQV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(oakis);