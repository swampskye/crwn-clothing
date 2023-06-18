// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { doc, getDoc, setDoc, getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDC9BkusPmBWgNj-BHH9m4owVlYQiLjpT8",
    authDomain: "crown-clothing-db-b76ec.firebaseapp.com",
    projectId: "crown-clothing-db-b76ec",
    storageBucket: "crown-clothing-db-b76ec.appspot.com",
    messagingSenderId: "1092032741490",
    appId: "1:1092032741490:web:249f4c830c392511af82eb"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

const providor = new GoogleAuthProvider(firebaseConfig)

providor.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, providor)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'user', userAuth.uid)
    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef)
    console.log(userSnapshot)
    console.log(userSnapshot.exists())

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log('There is an error creating user', error)
        }
    }


    // const newUserSnapshot = await getDoc(userDocRef)
    // console.log(newUserSnapshot)
    // console.log(newUserSnapshot.exists())

    return userDocRef

}