

/*import  firebase from 'firebase/app';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDAckscVAfqbUqMDlRM8lzxKUlsMaR7ang",
  authDomain: "cse150-project.firebaseapp.com",
  projectId: "cse150-project",
  storageBucket: "cse150-project.appspot.com",
  messagingSenderId: "409098070472",
  appId: "1:409098070472:web:87dbdea462ae0e9db038fd",
  measurementId: "G-J14M823WQS"
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
*/
import { initializeApp } from 'firebase/app';
import { useEffect, useState} from "react";
import { getFirestore,getDocs,collection, onSnapshot} from 'firebase/firestore';
import {getAuth, onAuthStateChanged,signOut} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDAckscVAfqbUqMDlRM8lzxKUlsMaR7ang",
  authDomain: "cse150-project.firebaseapp.com",
  projectId: "cse150-project",
  storageBucket: "cse150-project.appspot.com",
  messagingSenderId: "409098070472",
  appId: "1:409098070472:web:87dbdea462ae0e9db038fd",
  measurementId: "G-J14M823WQS"
 
  };

 const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);
 const authentication = getAuth(app);
 export {authentication,db}

 export function handleSignOut(){
  signOut(authentication).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
 }

 export function useAuth(){
   const [user,setUser] = useState();

   useEffect(() => {
     const unsub = onAuthStateChanged(authentication, user => setUser(user));
     return unsub;
   }, [])
   return user
 }


/*
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDAckscVAfqbUqMDlRM8lzxKUlsMaR7ang",
    authDomain: "cse150-project.firebaseapp.com",
    projectId: "cse150-project",
    storageBucket: "cse150-project.appspot.com",
    messagingSenderId: "409098070472",
    appId: "1:409098070472:web:87dbdea462ae0e9db038fd",
    measurementId: "G-J14M823WQS"
  };

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
*/



/*
import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDAckscVAfqbUqMDlRM8lzxKUlsMaR7ang",
    authDomain: "cse150-project.firebaseapp.com",
    projectId: "cse150-project",
    storageBucket: "cse150-project.appspot.com",
    messagingSenderId: "409098070472",
    appId: "1:409098070472:web:87dbdea462ae0e9db038fd",
    measurementId: "G-J14M823WQS"
  };
firebase.initializeApp(firebaseConfig);
export default firebase;
*/
