// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDVJpwQy4wemGicLchU9FhB2uraqiPgcs0",
	authDomain: "movieflix-gpt05.firebaseapp.com",
	projectId: "movieflix-gpt05",
	storageBucket: "movieflix-gpt05.appspot.com",
	messagingSenderId: "838141803780",
	appId: "1:838141803780:web:247eac98ab32536907a451",
	measurementId: "G-QWN075FYM8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
