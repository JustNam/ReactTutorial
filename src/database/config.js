import * as firebase from 'firebase'
  var firebaseConfig = {
    apiKey: "AIzaSyCc6UE0ljjmMJWA92sOoJeJ1b7-MQVWEP4",
    authDomain: "photowall-fd4d8.firebaseapp.com",
    databaseURL: "https://photowall-fd4d8.firebaseio.com",
    projectId: "photowall-fd4d8",
    storageBucket: "photowall-fd4d8.appspot.com",
    messagingSenderId: "698380908688",
    appId: "1:698380908688:web:7412a61782fa054f"
  };

  firebase.initializeApp(firebaseConfig)

  const database = firebase.database()

  export {database}