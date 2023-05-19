// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzbrz8DGWtfgjvBQlHdG77SEOzUAz0aes",
  authDomain: "kids-dreams.firebaseapp.com",
  projectId: "kids-dreams",
  storageBucket: "kids-dreams.appspot.com",
  messagingSenderId: "318916285268",
  appId: "1:318916285268:web:9197cc42922a2a02c3eec1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app