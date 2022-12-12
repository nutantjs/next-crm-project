import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCfyiGLV81TyoCfNLK4RIMP-fWcma1TpB0",
  authDomain: "smartmobizan-8dec1.firebaseapp.com",
  databaseURL: "https://smartmobizan-8dec1.firebaseio.com",
  projectId: "smartmobizan-8dec1",
  storageBucket: "smartmobizan-8dec1.appspot.com",
  messagingSenderId: "586156009157",
  appId: "1:586156009157:web:bf35607a130a80df3c32ac",
  measurementId: "G-979F4JEYHH"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth()