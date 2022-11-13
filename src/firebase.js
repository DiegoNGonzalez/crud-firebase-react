// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBPKKvbofNApSO_7PiG23Tk8f5_eCkPG1s",
    authDomain: "crud-react-firebase1.firebaseapp.com",
    projectId: "crud-react-firebase1",
    storageBucket: "crud-react-firebase1.appspot.com",
    messagingSenderId: "847637331746",
    appId: "1:847637331746:web:b2b50cce25a1df6f562f7b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)