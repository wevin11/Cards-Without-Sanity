import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  // your Firebase config options
    apiKey: "AIzaSyBbtjhMJo3APWAseXXa91Mozy6cAq-hT2E",
    authDomain: "cards-913ba.firebaseapp.com",
    projectId: "cards-913ba",
    storageBucket: "cards-913ba.appspot.com",
    messagingSenderId: "714126255536",
    appId: "1:714126255536:web:ba8e4590302e4d0f406275",
    measurementId: "G-5NPNG1KLSF"
  
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase};
