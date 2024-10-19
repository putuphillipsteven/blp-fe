import axios from 'axios';
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';
import { getFirestore, query, getDocs, collection, where, addDoc } from 'firebase/firestore';

import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
	apiKey: process.env.VITE_APP_API_KEY,
	authDomain: process.env.VITE_APP_AUTH_DOMAIN,
	projectId: process.env.VITE_APP_PROJECT_ID,
	storageBucket: process.env.VITE_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.VITE_APP_MESSAGING_SENDER_ID,
	appId: process.env.VITE_APP_APP_ID,
	measurementId: process.env.VITE_APP_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

const analytics = getAnalytics(app);
