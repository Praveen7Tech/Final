// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMEpOUfYbRyyGzj3eBhezyOkGbjcPWQU0",
  authDomain: "netflixclone-1f80b.firebaseapp.com",
  projectId: "netflixclone-1f80b",
  storageBucket: "netflixclone-1f80b.firebasestorage.app",
  messagingSenderId: "475359139043",
  appId: "1:475359139043:web:e4642e4bad171da121e1d6",
  measurementId: "G-MJSHDN5V03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth =getAuth()
const db = getFirestore(app);

const SignUp = async (name, email, password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user;
        console.log("uss",user)
        await addDoc(collection(db, user, {
            uid : user.uid,
            name,
            authProvider: "local",
            email,
        }))
    } catch (error) {
        console.log(error)
        alert(error)
    }
}


const login = async (email, password) =>{
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.log(error)
        alert(error)
    }
}


const Logout = ()=>{
    signOut(auth)
}

export {auth, db, login, SignUp, Logout};