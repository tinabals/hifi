// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD9tY95OVwTWZR3AUXI7E91Bo3w4wF7S1U",
    authDomain: "hifi-38591.firebaseapp.com",
    projectId: "hifi-38591",
    storageBucket: "hifi-38591.appspot.com",
    messagingSenderId: "652295433508",
    appId: "1:652295433508:web:05694c988a140335e357b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
