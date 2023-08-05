import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAazMczxwNzJ-5mDF-VyGcY0tYjAvuBwzQ",
  authDomain: "tabo-book-app.firebaseapp.com",
  projectId: "tabo-book-app",
  storageBucket: "tabo-book-app.appspot.com",
  messagingSenderId: "987814857821",
  appId: "1:987814857821:web:cce7d36c72d508992cd1b4",
  measurementId: "G-QXVWRN4HRC"
};

const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp);
export const firebaseStorage = getStorage(firebaseApp);

export default firebaseApp;