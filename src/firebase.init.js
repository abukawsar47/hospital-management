// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDSCFBK1eETzZqULsRly3eVZae7BHS62Qg",
    authDomain: "hospital-management-56ef7.firebaseapp.com",
    projectId: "hospital-management-56ef7",
    storageBucket: "hospital-management-56ef7.appspot.com",
    messagingSenderId: "1080508869120",
    appId: "1:1080508869120:web:80704ed4fa337a6caa06e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;