// import initializeApp  from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import firebase from "firebase/compat/app"
// import "firebase/auth";
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';



const firebaseConfig = {
  apiKey: "AIzaSyB3Ky81Kg5v-WXJnxgB59TTKaK8F0FsPAo",
  authDomain: "uolkut-c9458.firebaseapp.com",
  projectId: "uolkut-c9458",
  storageBucket: "uolkut-c9458.appspot.com",
  messagingSenderId: "1096155888481",
  appId: "1:1096155888481:web:0e5c1a42bb54b2b801a320"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {auth};

const db = getFirestore(app);

export {db};