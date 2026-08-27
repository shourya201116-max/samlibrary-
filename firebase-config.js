import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBl4hIn8hRRDiQi2NIY1SMQ3W6ZE2EBLeU",
  authDomain: "sam-library.firebaseapp.com",
  projectId: "sam-library",
  storageBucket: "sam-library.firebasestorage.app",
  messagingSenderId: "423256204857",
  appId: "1:423256204857:web:6b246e1a0207b2d0058fe8",
  measurementId: "G-0TC0YX3779"
};
// Initialize Firebase App & Firestore Database
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
