import firebase from "firebase"
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD7l3nxiAR01fiEIX1-tSf6A9ADbSlViUU",
    authDomain: "sphere-7880b.firebaseapp.com",
    databaseURL: "https://sphere-7880b.firebaseio.com",
    projectId: "sphere-7880b",
    storageBucket: "sphere-7880b.appspot.com",
    messagingSenderId: "414621640992",
    appId: "1:414621640992:web:fe2610fa2efbe2e41b8f45",
    measurementId: "G-YZ4H1KFMES"
  });

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
export { db, auth, storage };