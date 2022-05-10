 
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBmCJUJZp1Ej_u5nKk0sF-sDaVfuMSds0U",
  authDomain: "project2-b4ef5.firebaseapp.com",
  projectId: "project2-b4ef5",
  storageBucket: "project2-b4ef5.appspot.com",
  messagingSenderId: "1091393379150",
  appId: "1:1091393379150:web:b788920adcc992fa53dc1f",
  measurementId: "G-P7LM4D4ZM4"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };