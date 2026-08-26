// Sam Library Firebase configuration
// Firebase Web SDK v12.1.0

import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js';

// Your Sam Library Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBl4hIn8hRRDiQi2NIY1SMQ3W6ZE2EBLeU",
  authDomain: "sam-library.firebaseapp.com",
  projectId: "sam-library",
  storageBucket: "sam-library.firebasestorage.app",
  messagingSenderId: "423256204857",
  appId: "1:423256204857:web:6b246e1a0207b2d0058fe8",
  measurementId: "G-0TC0YX3779"
};

// Check whether Firebase configuration is available
export const isFirebaseConfigured =
  Object.keys(firebaseConfig).length > 0 &&
  !Object.values(firebaseConfig).some(value =>
    String(value).startsWith("YOUR_")
  );

// Initialize Firebase
export const app = isFirebaseConfigured
  ? initializeApp(firebaseConfig)
  : null;

// Initialize Firestore
export const db = app
  ? getFirestore(app)
  : null;

// Export configuration
export { firebaseConfig };
