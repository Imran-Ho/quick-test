import React, { createContext, useEffect, useState } from 'react';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import app from '../../firebase/firebase.config';


export const ContextAuth = createContext();
const auth = getAuth(app)


const AuthContext = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

//create user
const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
}

// sign in
const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
}
// sign out
const logOut = () => {
    setLoading(true);
    return signOut(auth);
}
// google sign in
    const googleSignIn =()=>{
        return signInWithPopup(auth, googleProvider)
    }

useEffect( () =>{
    const unSubscribe = onAuthStateChanged( auth, currentUser =>{
        console.log('current User inside state change', currentUser);
        setUser(currentUser);
        setLoading(false);
    });

    return () => unSubscribe();

}, [])

    const authInfo = {user, createUser, signIn, logOut, googleSignIn}
    return (
        <ContextAuth.Provider value={authInfo}>
            {children}
        </ContextAuth.Provider>
    );
};

export default AuthContext;