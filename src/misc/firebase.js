import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyAr4tG-LcneKuvA4ODUt7tmESPORzZmxl4',
  authDomain: 'hype-c2aed.firebaseapp.com',
  projectId: 'hype-c2aed',
  storageBucket: 'hype-c2aed.appspot.com',
  messagingSenderId: '984090695090',
  appId: '1:984090695090:web:e616187e4916368aab80ab',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
