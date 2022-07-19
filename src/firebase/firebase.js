import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGEIN_SENDER,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyDtZhO42ZXELgir-1HJVrtQKII5vgkr2bo",
  authDomain: "wheelbe-9f020.firebaseapp.com",
  projectId: "wheelbe-9f020",
  storageBucket: "wheelbe-9f020.appspot.com",
  messagingSenderId: "713229774309",
  appId: "1:713229774309:web:91f7c5b077718fdfac130c",
  measurementId: "G-39JDGHP2E2",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const fireStore = getFirestore(app);
export const storage = getStorage(app);
