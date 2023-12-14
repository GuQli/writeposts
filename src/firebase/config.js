import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyBEFa2xJcmf41d0PZdlZ9KYXzzIDJU3vUM",
//   authDomain: "writenode-10846.firebaseapp.com",
//   projectId: "writenode-10846",
//   storageBucket: "writenode-10846.appspot.com",
//   messagingSenderId: "42171469250",
//   appId: "1:42171469250:web:5f631bbed45f3129f2da5b",
// };

// ENV
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
  projectId: `${process.env.REACT_APP_PROJECT_ID}`,
  storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_MESSAGING_SENDER_ID}`,
  appId: `${process.env.REACT_APP_APP_ID}`,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
