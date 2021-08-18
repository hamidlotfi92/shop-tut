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

  // creating user profile in DB, if it's not authenticated it simply returns nothing but if not, it creates and return the user as an object
  export const createUserProfileDocument= async(userAuth,additionalData)=>{
    if(!userAuth)return;
    //gets user's uniq id
    const userRef= firestore.doc(`users/${userAuth.uid}`);
    //gets a snapshot of the user. it has limited info about the user, like exists 
    const snapShot=await userRef.get();

    if(!snapShot.exists){
      const {displayName,email}=userAuth;
      const createDate=new Date();
      //creates a record(document) in DB with below informations
      try{
        await userRef.set({
          displayName,
          email,
          createDate,
          ...additionalData
        })
      }catch(error){
        console.log('error creating user',error.message);
      }
      
    }
    //returns the user object
    return userRef;
  }
  //first initializing the firebase
  firebase.initializeApp(firebaseConfig);

  
  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle=()=>auth.signInWithPopup(provider);
  
  export default firebase;