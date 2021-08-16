import firebase from "firebase/app";

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCVGWieVECuN4pS17b2ZlzIDX5Mrmxo4GQ",
  authDomain: "crwn-db-f828e.firebaseapp.com",
  projectId: "crwn-db-f828e",
  storageBucket: "crwn-db-f828e.appspot.com",
  messagingSenderId: "219471764028",
  appId: "1:219471764028:web:0a540a362e7feb940d0139",
  measurementId: "G-KNPZ4C0X6T"
};

export const createUserProfileDocument = async (userAuth, additonalData) => {
  if(!userAuth) return; 

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get();
  
  if(!snapShot.exists){
    const { displayName, email } = userAuth; 
    const createdAt = new Date(); 

    try {
      await userRef.set({
        displayName, 
        email, 
        createdAt,
        ...additonalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
}

firebase.initializeApp(config); 

export const auth = firebase.auth(); 
export const firestore = firebase.firestore(); 

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 