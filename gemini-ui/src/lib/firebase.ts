import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAS3gdZE6YWF50SP3YkE7ERK_ORCgsyHjI",
  authDomain: "autotrics-studio.firebaseapp.com",
  projectId: "autotrics-studio",
  storageBucket: "autotrics-studio.firebasestorage.app",
  messagingSenderId: "389008528075",
  appId: "1:389008528075:web:c9bce33bb87b6e12a8c14e",
  measurementId: "G-DRPWRRLXKL",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export const analytics =
  typeof window !== "undefined" ? getAnalytics(app) : null;

export default app;