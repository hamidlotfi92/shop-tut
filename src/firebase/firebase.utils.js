import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyBH6vmsnrqwHC5zTjXepF7Ky04jWvXaLOA",
    authDomain: "test-project-db-310eb.firebaseapp.com",
    projectId: "test-project-db-310eb",
    storageBucket: "test-project-db-310eb.appspot.com",
    messagingSenderId: "1090900808816",
    appId: "1:1090900808816:web:67883f5c678bc0b2dc50b5",
    measurementId: "G-KZ0K3GZ26G"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle=()=>auth.signInWithPopup(provider);
  
  export default firebase;