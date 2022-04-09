// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyClv9HvmvDYjDfrh5s6UP3iMLUhx9Kw-pw',
  authDomain: 'passwordmanagerapp-c6114.firebaseapp.com',
  databaseURL: 'https://passwordmanagerapp-c6114-default-rtdb.firebaseio.com',
  projectId: 'passwordmanagerapp-c6114',
  storageBucket: 'passwordmanagerapp-c6114.appspot.com',
  messagingSenderId: '1012367111545',
  appId: '1:1012367111545:web:aae9442e001246489eeba8',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const signup = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
export const login = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logout = () => {
  return signOut(auth);
};
