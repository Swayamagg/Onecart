import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "onecart-c4ba6.firebaseapp.com",
  projectId: "onecart-c4ba6",
  storageBucket: "onecart-c4ba6.firebasestorage.app",
  messagingSenderId: "270027859754",
  appId: "1:270027859754:web:0e5f2a7004b497b479e053"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider=new GoogleAuthProvider()

export {auth,provider}