import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyBt0MgYyWDg-LRSxx_vvKFxIhpkZ20dg4Q",
  authDomain: "movie-app-5ac0a.firebaseapp.com",
  projectId: "movie-app-5ac0a",
  storageBucket: "movie-app-5ac0a.appspot.com",
  messagingSenderId: "635119263327",
  appId: "1:635119263327:web:a13342b8cb76f6f968c5ea",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
