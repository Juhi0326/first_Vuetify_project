import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyABjeGxSfdY3n21lYCzTRDyLZy5tdMhVFg",
    authDomain: "vuetifydatabase-4f04d.firebaseapp.com",
    databaseURL: "https://vuetifydatabase-4f04d.firebaseio.com",
    projectId: "vuetifydatabase-4f04d",
    storageBucket: "vuetifydatabase-4f04d.appspot.com",
    messagingSenderId: "164451617286",
    appId: "1:164451617286:web:15cc365fad936fd5ffd187",
    measurementId: "G-RWFTGD3TTP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

  const db = firebase.firestore();

//   db.settings({ timestampsInSnapshots: true});

  export default db;