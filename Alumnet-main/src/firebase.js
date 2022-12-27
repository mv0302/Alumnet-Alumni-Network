// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCQNRc1uQhbPhd-CabQM24wnoIK6dJm1Mw",
    authDomain: "alumnet-b3c61.firebaseapp.com",
    projectId: "alumnet-b3c61",
    storageBucket: "alumnet-b3c61.appspot.com",
    messagingSenderId: "427308702765",
    appId: "1:427308702765:web:e779caf60cdfe4b1316ca4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };