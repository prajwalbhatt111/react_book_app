import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyCSuGuQCJlWTi8w5LmTGQDp-NzD5oN4FsI",
    authDomain: "booksdb-5025d.firebaseapp.com",
    projectId: "booksdb-5025d",
    storageBucket: "booksdb-5025d.appspot.com",
    messagingSenderId: "152426976309",
    appId: "1:152426976309:web:953a8c9d9d3725b1790d7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)