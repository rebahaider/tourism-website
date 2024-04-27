// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8XJqKiFGY6ZtbJBLAbkau-4CTiVPIAJQ",
  authDomain: "assignment-10-client-sid-22892.firebaseapp.com",
  projectId: "assignment-10-client-sid-22892",
  storageBucket: "assignment-10-client-sid-22892.appspot.com",
  messagingSenderId: "751695449465",
  appId: "1:751695449465:web:efcffa399a2bd435bf73a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;