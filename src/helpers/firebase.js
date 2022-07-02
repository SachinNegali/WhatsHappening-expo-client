// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAMx7WSkp2Rulj4vrJK-cL3PVMDYs8LlWw",
    authDomain: "whatshappening-1c8b6.firebaseapp.com",
    projectId: "whatshappening-1c8b6",
    storageBucket: "whatshappening-1c8b6.appspot.com",
    messagingSenderId: "1020972394266",
    appId: "1:1020972394266:web:57ef438e1f48ceba8e2ea3",
    measurementId: "G-YHS6V2LLQ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = initializeFirestore(app, { experimentalForceLongPolling: true });

export { db, auth };