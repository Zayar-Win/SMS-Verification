// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {initializeAppCheck, ReCaptchaV3Provider} from 'firebase/app-check'
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyA9772_W0Z5KlhHa8Hd9D9bMSXzC80UtuY",
    authDomain: "smscode-ca49a.firebaseapp.com",
    projectId: "smscode-ca49a",
    storageBucket: "smscode-ca49a.firebasestorage.app",
    messagingSenderId: "973917364471",
    appId: "1:973917364471:web:0785bb687f8ada85de73f2",
    measurementId: "G-DXTQSCNMBT"
};
  window.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)
  const analytics = getAnalytics(app);
  const appCheck = initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider('6LdZ73UqAAAAAN_U3ps0FqDCssosXChZFeHjuZAX'), //site key
    // Optional argument. If true, the SDK automatically refreshes App Check
    // tokens as needed.
    isTokenAutoRefreshEnabled: true
  });

  export default auth;