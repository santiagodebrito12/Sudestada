import firebase from 'firebase';
import 'firebase/firestore';

var app = firebase.initializeApp({
  apiKey: 'AIzaSyBYjQTSB3XVHooK1BQDTM5PwADPNMMJOhE',
  authDomain: 'sudetada-commerce.firebaseapp.com',
  databaseURL: 'https://www.gstatic.com/firebasejs/8.7.0/firebase-app.js',
  projectId: 'sudetada-commerce',
  storageBucket: 'sudetada-commerce.appspot.com',
  messagingSenderId: '148549116103',
  appId: '1:148549116103:web:eda54ef1403f870be71ee2'
});

export function getFirebase() {
  return app;
}
export function getFirestore() {
  return firebase.firestore(app);
}
