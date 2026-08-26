// Sam Library Firebase configuration
// Replace ONLY the values below with your Firebase Web App config.
// Do not put service-account/private-key credentials in this file.

import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyBl4hIn8hRRDiQi2NIY1SMQ3W6ZE2EBLeU",
  authDomain: "sam-library.firebaseapp.com",
  projectId: "sam-library",
  storageBucket: "sam-library.firebasestorage.app",
  messagingSenderId: "423256204857",
  appId: "1:423256204857:web:6b246e1a0207b2d0058fe8",
  measurementId: "G-0TC0YX3779"
};

export const isFirebaseConfigured = !Object.values(firebaseConfig).some(v => String(v).startsWith('YOUR_'));
export const app = isFirebaseConfigured ? initializeApp(firebaseConfig) : null;
export const db = app ? getFirestore(app) : null;

export { firebaseConfig };
