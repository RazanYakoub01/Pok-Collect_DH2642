import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from 'firebase/database';

/**
 * Firebase configuration object containing API keys and other settings.
 */
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

/**
 * Initialize the Firebase app with the provided configuration.
 */
const app = initializeApp(firebaseConfig);

/**
 * Get the authentication instance from the initialized app.
 */
const auth = getAuth(app);

/**
 * Get the database instance from the initialized app.
 */
const database = getDatabase(app);

/**
 * Export the initialized app, authentication instance,
 * and database instance for use in other parts of the application.
 */
export { app, auth, database };
