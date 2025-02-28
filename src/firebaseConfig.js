// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const  firebaseConfig = {
    apiKey: "AIzaSyC9KnaQQQeYGdmK06uK0EtkyKjfeEi8G-k",
    authDomain: "map-cost-opt.firebaseapp.com",
    projectId: "map-cost-opt",
    storageBucket: "map-cost-opt.firebasestorage.app",
    messagingSenderId: "557831087041",
    appId: "1:557831087041:web:e11d1346c168ec8b504540",
    measurementId: "G-86CKBLB6HN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };