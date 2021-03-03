import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCa1zYBPpZtqef8sAjpDrtTOFAejIF8b9Q",
    authDomain: "netflix-clone-83724.firebaseapp.com",
    projectId: "netflix-clone-83724",
    storageBucket: "netflix-clone-83724.appspot.com",
    messagingSenderId: "258045224259",
    appId: "1:258045224259:web:e392c44251428da5c27bf6",
    measurementId: "G-3F87WLGLB3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export {auth}
  export default db;