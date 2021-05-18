import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBDcbpMuwjGcLe-N-1O1jSeKiiyK1Zt71g",
  authDomain: "practice-tools-245512.firebaseapp.com",
  projectId: "practice-tools-245512",
  storageBucket: "practice-tools-245512.appspot.com",
  messagingSenderId: "516238525848",
  appId: "1:516238525848:web:272756a6daa6f0d5f057ed",
  measurementId: "G-ZDQJWQ3SZS"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {

  if(!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()
  
  if(snapShot.exists === false){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error){
      console.log('error creating user', error.message)
    }
  }
  return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;