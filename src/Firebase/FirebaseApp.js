// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGVoEybZYREu5sWjgGwcHOWGA8ynd63mY",
  authDomain: "front-end-22801-5f39f.firebaseapp.com",
  projectId: "front-end-22801-5f39f",
  storageBucket: "front-end-22801-5f39f.appspot.com",
  messagingSenderId: "650049892133",
  appId: "1:650049892133:web:1fc6f6d3ec58646cff74cc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Cuando se inicialice la aplicacion, firebase las va a pasar como objeto con propiedades
// Hara el llamado y le va a avisar al backend que el frontend esta listo para hacer cosas